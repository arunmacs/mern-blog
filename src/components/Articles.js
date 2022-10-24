import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="p-4 md:w-1/2">
          <div className="h-full border-2 border-violet-400 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <img
                src={article.thumbnail}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                alt={`articleImage`}
              />
            </Link>
            <div className="p-6">
              <Link to={`/article/${article.name}`} key={index}>
                <h1 className="text-lg font-medium text-gray-700 mb-3">
                  {article.title}
                </h1>
                <p className="leading-relaxed mb-3">
                  {article.content[0].substring(0, 100)}...
                </p>
                <div className="flex items-center flex-wrap">
                  <p className="text-indigo-500">Learn More</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
