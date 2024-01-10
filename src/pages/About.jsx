import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/imageBannerAbout.png";
import datasAbout from "../assets/textAbout.json";
import "./About.scss";

const About = () => {
  return (
    <>
      <Banner imageURL={imageBanner} />
      <div className="collapseGroup">
        {datasAbout.map((dataAbout) => (
          <Collapse
            key={dataAbout.id}
            title={dataAbout.title}
            text={dataAbout.text}
          />
        ))}
      </div>
    </>
  );
};

export default About;
