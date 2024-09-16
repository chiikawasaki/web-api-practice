import "./App.css";
import React, { useState, useRef } from "react";
import ImageGrallery from "./ImageGrallery";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    //画面の自動リロードを防ぐ
    e.preventDefault();
    console.log(ref.current.value);
    //APIURL
    const endpointURL = `https://pixabay.com/api/?key=46015804-8b8fea842e7d64e41f9398372&q=${ref.current.value}&image_type=photo`;
    //APIを叩く（データフェッチング）
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });
  };
  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData} />
    </div>
  );
}

export default App;
