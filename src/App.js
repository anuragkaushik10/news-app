import React, { useState, useEffect } from "react";
import NewsProvider from "./components/NewsProvider";
import axios from "axios";
import News from "./components/News";
import "./App.css";
export default function App() {
  const [data, setData] = useState([]);

  async function callApi() {
    const key = "4e04063722cb42fd90c9659bcc0be9ac";
    let url =
      "https://newsapi.org/v2/everything?q=tesla&from=2022-04-02&sortBy=publishedAt&apiKey=4e04063722cb42fd90c9659bcc0be9ac";
    await axios.get(url).then((response) => setData(response));
  }
  useEffect(() => {
    callApi();
  }, []);
  // console.log(data);
  return (
    <>
      <NewsProvider.Provider value={data}>
        <News />
      </NewsProvider.Provider>
    </>
  );
}
