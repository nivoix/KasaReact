import React from "react";
import { useState } from "react";
import dropdown from "../assets/dropdown.png";
import "./Collapse.scss";

const Collapse = (props) => {
  const [visible, setvisible] = useState(false);

  const show = () => {
    setvisible(!visible);
  };

  return (
    <div className={`collapseCard ${visible ? "showCard" : "hideCard"}`}>
      <div className="bannerCollapseCard" onClick={show}>
        {props.title}
        <img
          src={dropdown}
          alt="dropdown"
          className={`dropdown ${visible ? "up" : "down"}`}
        />
      </div>
      {
        <div className={`collapseText ${visible ? "textVisible" : "textHide"}`}>
          {props.text}
        </div>
      }
    </div>
  );
};

export default Collapse;
