import React from "react";

export default function NewsArticle({ data }) {
  console.log(data.url);
  return (
    <>
      <a href={data.url} target="_blank">
        <div className="news">
          <h1 className="news-title">{data.title}</h1>
          <p className="news-description">{data.description}</p>
          <span className="news-author">{data.author}</span>
          <br />
          <span className="news-published news-info">{data.publishedAt}</span>
          <br />
          <span className="news-source news-info">{data.source.name}</span>
        </div>
      </a>
    </>
  );
}
