import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "../data/articleContent";
import Articles from "../components/Articles";
import NotFound from "./NotFound";

const Article = () => {
  const [articleInfo, setArticleInfo] = useState({ comments: [] });
  const { name } = useParams();

  useEffect(() => {
    console.log("UseEffect Hook Mounted");
  });

  const article = articleContent.find((article) => article.name === name);
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  if (!article) return <NotFound />;

  return (
    <>
      <h1 className="sm:text-4xl text-violet-500 mb-10">
        {article.title} - MERN Blog,
      </h1>
      <img
        src={article.thumbnail}
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        alt={`articleImage`}
      />
      {article.content.map((para, index) => (
        <p
          key={index}
          className="mx-auto my-5 text-gray-600 leading-relaxed text-base"
        >
          {para}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
