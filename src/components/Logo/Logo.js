import React from "react";
import "./logo.scss";
import logoImg from "../../assets/img/logo_00.png";

const Logo = () => {
  return (
    <h1 id="logo-main">
      <img src={logoImg} alt="Manuel Pascual" />
    </h1>
  );
};

export default Logo;
