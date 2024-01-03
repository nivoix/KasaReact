import React from "react";
import "./ApartmentCard.scss";
import { NavLink } from "react-router-dom";

const ApartmentCard = (props) => {
  return (
    <NavLink to={`/Apartment/${props.id}`} className="apartmentCard">
      <img
        className="apartmentCard__Img"
        src={props.imageURL}
        alt="apartment photo"
      />
      <h2 className="apartmentCard__Title">{props.title}</h2>
    </NavLink>
  );
};

export default ApartmentCard;
