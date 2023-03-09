import React, { useState, useEffect } from "react";
import Logo from "../../img/RickAndMorty.png";
import ImageList from "../Components/ImageList";
import "./Home.css";

const Home = ({ data }) => {
  const getDataInput = () => {
    const card = window.localStorage.getItem("MY_APP_STATE");
    return card ? JSON.parse(card) : [];
  };

  const [query, setQuery] = useState(getDataInput);

  useEffect(() => {
    window.localStorage.setItem("MY_APP_STATE", JSON.stringify(query));
  }, [query]);

  return (
    <div className="container">
      <div className="home__img">
        <img src={Logo} alt="" />
      </div>
      <div className="home__input">
        <input
          type="text"
          name="search"
          placeholder="Filter by name....."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <ImageList data={data} query={query} />
    </div>
  );
};

export default Home;
