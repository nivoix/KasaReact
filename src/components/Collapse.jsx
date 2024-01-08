import React from "react";
import { useState } from "react";
import dropdown from "../assets/dropdown.png";
import "./Collapse.scss";

const Collapse = (props) => {
  const [visible, setvisible] = useState(false);

  const collapseCardShow = visible ? "show" : "noShow";
  const collapseTextShow = visible ? "visible" : "hidden";

  const show = () => {
    setvisible(!visible);
  };
  return (
    <div className={`collapseCard ${collapseCardShow}`}>
      <div className="bannerCollapseCard" onClick={show}>
        {props.title}
        <img
          src={dropdown}
          alt="dropdown"
          className={visible ? "up" : "down"}
        />
      </div>
      <div className={`collapseText ${collapseTextShow}`}>{props.text}</div>
    </div>
  );
};

export default Collapse;
