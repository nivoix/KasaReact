import { NavLink } from "react-router-dom";
import logo from "../assets/logoNavbar.png";
import "./Navbar.scss";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img className="navbar__imgLogo" src={logo} alt="logo"></img>
      </NavLink>
      <div className="navbar__link">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/About">A propos</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
