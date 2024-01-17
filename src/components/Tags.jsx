import React from "react";
import "./Tags.scss";

const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </>
  );
};

export default Tags;
