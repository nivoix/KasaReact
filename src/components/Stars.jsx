import React from "react";
import redStar from "../assets/redStar.png";
import greyStar from "../assets/greyStar.png";
import "./stars.scss";

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((num, index) => (
        <img
          key={index}
          alt="star"
          src={rating >= num ? `${redStar}` : `${greyStar}`}
        />
      ))}
    </div>
  );
};

export default Stars;
