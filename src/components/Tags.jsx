import React from "react";
import "./Tags.scss";

const Tags = (props) => {
  return (
    <>
      {props.tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </>
  );
};

export default Tags;
