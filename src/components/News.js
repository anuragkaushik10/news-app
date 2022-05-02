import React, { useContext } from "react";
import NewsProvider from "./NewsProvider";
import NewsArticle from "./NewsArticle";
export default function News() {
  const { data } = useContext(NewsProvider);
  return (
    <>
      <h1 className="heading">News App</h1>
      <div className="all-news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </>
  );
}
