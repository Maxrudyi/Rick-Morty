import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ data, query }) => {
  const images = data.filter((character) =>
    character.name.toLowerCase().includes(query)
  );
  let sort = images.sort(function (a, b) {
    return a.name.toUpperCase() < b.name.toUpperCase()
      ? -1
      : a.name.toUpperCase() > b.name.toUpperCase()
      ? 1
      : 0;
  });
  const characterCard = sort.map((result) => {
    return (
      <ImageCard
        key={result.id}
        id={result.id}
        image={result.image}
        name={result.name}
        species={result.species}
      />
    );
  });

  return <div className="home__list">{characterCard}</div>;
};

export default ImageList;
