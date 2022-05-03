import React, { useState, useEffect } from "react";
import NewsProvider from "./components/NewsProvider";
import axios from "axios";
import News from "./components/News";
import "./App.css";
export default function App() {
  const [data, setData] = useState([]);

  async function callApi() {
    const key = "2aefb6f341766ede9a92abb5fd20fa81";
    let url =
      "https://gnews.io/api/v4/search?q=example&token=2aefb6f341766ede9a92abb5fd20fa81&lang=en";
    await axios
      .get(url)
      .then((response) => setData(response))
      .catch((error) => console.log("Error ", error));
  }
  useEffect(() => {
    callApi();
  }, []);
  console.log(data);
  return (
    <>
      <NewsProvider.Provider value={data}>
        <News />
      </NewsProvider.Provider>
    </>
  );
}
