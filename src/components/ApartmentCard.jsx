import React from "react";
import "./ApartmentCard.scss";
import { NavLink } from "react-router-dom";

const ApartmentCard = ({ id, title, imageURL }) => {
  return (
    <NavLink to={`/Apartment/${id}`} className="apartmentCard">
      <img
        className="apartmentCard__Img"
        src={imageURL}
        alt="apartment photo"
      />
      <h2 className="apartmentCard__Title">{title}</h2>
    </NavLink>
  );
};

export default ApartmentCard;
