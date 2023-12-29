import "./Banner.scss";

import React from "react";

const Banner = (props) => {
  return (
    <div className="cardBanner">
      <img
        className="imgbanner"
        src={props.imageURL}
        alt="bannière d'un paysage"
      ></img>
      {props.title && <h1 className="titlebanner">{props.title}</h1>}
    </div>
  );
};
//ligne 13: affichage conditionnel du titre uniquement si les props.title sont passées
export default Banner;
