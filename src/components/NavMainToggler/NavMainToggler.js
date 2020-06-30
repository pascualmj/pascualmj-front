import React from "react";
import PropTypes from "prop-types";
import "./navMainToggler.scss";

const NavMainToggler = ({ variant = "open", handleOpenNav }) => {
  return (
    <div
      className={`nav-main-toggler variant-${variant}`}
      onClick={handleOpenNav}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

NavMainToggler.propTypes = {
  variant: PropTypes.oneOf(["open", "close"]),
  handleOpenNav: PropTypes.func.isRequired,
};

export default NavMainToggler;
