import "./Banner.scss";
import React from "react";

//ligne 13: affichage conditionnel du titre uniquement si les props.title sont passées
const Banner = (props) => {
  return (
    <div className="cardBanner">
      <img
        className="imgbanner"
        src={props.imageURL}
        alt="bannière d'un paysage"
      ></img>
      {props.title1 && (
        <div className="cardtitlebanner">
          <h1 className="titlebanner">{props.title1}</h1>
          <h1 className="titlebanner">{props.title2}</h1>
        </div>
      )}
    </div>
  );
};
export default Banner;
