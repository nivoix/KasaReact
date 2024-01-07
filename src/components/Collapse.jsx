import React from "react";
import { useState } from "react";
import dropup from "../assets/dropup.png";
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
        <img src={visible ? dropup : dropdown} alt="dropdown" />
      </div>
      <div className={`collapseText ${collapseTextShow}`}>{props.text}</div>
    </div>
  );
};

export default Collapse;
