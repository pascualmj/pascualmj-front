import React from "react";
import PropTypes from "prop-types";
import "./navLink.scss";

const NavLink = ({ text, handleClick, scrollTo, isActive = false }) => {
  return (
    <div
      onClick={handleClick.bind(null, scrollTo)}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      <span>{text}</span>
    </div>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  scrollTo: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default NavLink;
