import React from "react";
import PropTypes from "prop-types";
import "./navMainToggler.scss";

const NavMainToggler = ({ variant = "open", handleOpenNav }) => {
  return (
    <div
      className={`nav-main-toggler variant-${variant}`}
      onClick={handleOpenNav}
    >
      <i className="fas fa-ellipsis-h fa-fw nav-main-open"></i>
      <i className="fas fa-times fa-fw nav-main-close"></i>
    </div>
  );
};

NavMainToggler.propTypes = {
  variant: PropTypes.oneOf(["open", "close"]),
  handleOpenNav: PropTypes.func.isRequired,
};

export default NavMainToggler;
