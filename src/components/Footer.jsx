import logoFooter from "../assets/logoFooter.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="cardFooter">
      <img className="imgFooter" src={logoFooter} alt="logo"></img>
      <p className="textFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
