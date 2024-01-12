import React from "react";
import { useState } from "react";
import "./Carrousel.scss";
import dropleft from "../assets/dropLeft.png";
import dropright from "../assets/dropRight.png";
import noPictures from "../assets/noPictures.png";

const Carrousel = (props) => {
  const [currentPicture, setcurrentPicture] = useState(0);

  const next = () => {
    const isLastSlide = currentPicture === props.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentPicture + 1;
    setcurrentPicture(newIndex);
  };

  const previous = () => {
    const isFirstSlide = currentPicture === 0;
    const newIndex = isFirstSlide
      ? props.images.length - 1
      : currentPicture - 1;
    setcurrentPicture(newIndex);
  };

  return props.images.length > 0 ? (
    <div className="apartmentCarroussel">
      <div className="carrouselImg">
        {props.images.map((image, i) => (
          <img
            src={image}
            key={i}
            alt="Apartment photos"
            className={i === currentPicture ? "on" : ""}
          />
        ))}
      </div>
      {props.images.length > 1 ? (
        <>
          <img
            className="drop left"
            src={dropleft}
            alt="drop"
            onClick={previous}
          ></img>
          <img
            className="drop right"
            src={dropright}
            alt="drop"
            onClick={next}
          ></img>
          <p className="counterimage">
            {currentPicture + 1}/{props.images.length}
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  ) : (
    <img src={noPictures} alt="no picture" className="noPictures" />
  );
};

export default Carrousel;
