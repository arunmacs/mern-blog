import React from "react";
import articleContent from "../data/articleContent";
import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    <div className="mb-10">
      <h1 className="sm:text-4xl text-violet-500 font-bold my-6 text-center">
        Articles - MERN Blog
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
