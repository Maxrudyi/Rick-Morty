import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FacebookLoginComponent from "./Pages/Components/FacebookLogin";
import Character from "./Pages/Character/Character";
import Home from "./Pages/Home/Home";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setData(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <FacebookLoginComponent />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route
          path="/character/:characterId"
          element={<Character data={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
