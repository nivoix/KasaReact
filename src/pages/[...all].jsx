import React from "react";
import { NavLink } from "react-router-dom";
import logo404 from "../assets/404.png";
import "./all.scss";

const Error = () => {
  return (
    <div className="error">
      <img src={logo404}></img>
      <div className="textError">
        <p>Oups! La page que</p>
        <p>vous avez demandez n'existe pas.</p>
      </div>
      <NavLink to="/">Retourner sur la page d'Accueil</NavLink>
    </div>
  );
};

export default Error;
