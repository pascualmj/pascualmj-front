import React from "react";
import PropTypes from "prop-types";
import "./navLink.scss";

const NavLink = ({ text, handleClick, isActive = false }) => {
  return (
    <div
      onClick={handleClick}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      <span>{text}</span>
    </div>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default NavLink;
