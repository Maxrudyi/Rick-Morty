import React from "react";
import { Link } from "react-router-dom";
import "./ImageCard.css";

const ImageCard = ({ image, name, species, id }) => {
  return (
    <Link to={`/character/${id}`}>
      <div className="imageCard">
        <img src={image} alt={name} />
        <div className="imageCard__title">
          <p className="imageCard__title-name">{name}</p>
          <p className="imageCard__title-species">{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
