const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 8000;

app.use(express.json({ extended: false }));

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("mernblog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error Connecting to database", error });
  }
};

app.get("/api/articles/:name", (req, res) => {
  withDB(async (db) => {
    const articlename = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articlename });
    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comments", async (req, res) => {
  const { text, username } = req.body;
  const articlename = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articlename });
    await db
      .collection("articles")
      .updateOne(
        { name: articlename },
        { $set: { comments: articleInfo.comments.concat({ username, text }) } }
      );
    const updateArticleInfo = await db
      .collection("articles")
      .findOne({ name: articlename });

    res.status(200).json(updateArticleInfo);
  }, res);
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
