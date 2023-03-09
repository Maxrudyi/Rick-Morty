import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Character.css";
import arrow from "../../img/arrowBack.png";

const Character = ({ data }) => {
  const { characterId } = useParams();

  const characterInfo = data.find(
    (character) => character.id === parseInt(characterId)
  );

  const { name, image, gender, status, species, type } = characterInfo;
  const origin = characterInfo.origin.name;

  return (
    <>
      <Link to="/" className="button__goBack">
        <img src={arrow} alt="" />
        Go back
      </Link>
      <div className="character__container">
        <div className="character__img">
          <img className="character__img" src={image} alt={name} />
        </div>
        <p className="character__name">{name}</p>
        <p className="character__about">Informations</p>
        <ul className="character__list">
          <li>
            <p>Gander</p>
            <p>{gender}</p>
          </li>
          <li>
            <p>Status</p>
            <p>{status}</p>
          </li>
          <li>
            <p>Specie</p>
            <p>{species}</p>
          </li>
          <li>
            <p>Origin</p>
            <p>{origin}</p>
          </li>
          <li>
            <p>Type</p>
            <p>{type ? type : "Unknown"} </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Character;
