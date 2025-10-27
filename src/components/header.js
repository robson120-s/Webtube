import React from "react";
import logo from "../images/logo_black.png";
import "../components/styles/header.css";

const Header = () => {
  return (
    <div>
      <div className=" header   "></div>

      <div className="text-center rounded w-100 pt-3">
        <img src={logo} alt="Logo" className="logo rounded-circle " />
        <h1 className="display-3 fw-bold text-dark text">Hamere Birhan</h1>
      </div>
    </div>
  );
};

export default Header;
