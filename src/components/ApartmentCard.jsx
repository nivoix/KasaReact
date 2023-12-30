import React from "react";
import "./ApartmentCard.scss";

const ApartmentCard = (props) => {
  return (
    <div className="apartmentCard">
      <img
        className="apartmentCard__Img"
        src={props.imageURL}
        alt="apartment photo"
      />
      <h2 className="apartmentCard__Title">{props.title}</h2>
    </div>
  );
};

export default ApartmentCard;
