import React from "react";
import PropTypes from "prop-types";
import "./headerMain.scss";

import Logo from "../Logo";
import NavMainToggler from "../NavMainToggler";

const HeaderMain = ({ handleOpenNav, navIsOpen }) => {
  return (
    <div id="header-main">
      <Logo />
      <NavMainToggler
        handleOpenNav={handleOpenNav}
        variant={navIsOpen ? "close" : "open"}
      />
    </div>
  );
};

HeaderMain.propTypes = {
  handleOpenNav: PropTypes.func.isRequired,
  navIsOpen: PropTypes.bool.isRequired,
};

export default HeaderMain;
