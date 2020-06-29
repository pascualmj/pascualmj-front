import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./viewContainer.scss";

import FooterMain from "../FooterMain";

const ViewContainer = ({
  id = "",
  onViewScroll,
  children,
  handleOpenNav,
  navIsOpen,
}) => {
  useEffect(() => {
    if (onViewScroll && id) {
      document.getElementById(id).addEventListener("scroll", onViewScroll);
    }

    return () => {
      if (onViewScroll && id) {
        document.getElementById(id).removeEventListener("scroll", onViewScroll);
      }
    };
  }, [id, onViewScroll]);

  return (
    <main
      className={`view-container ${navIsOpen ? "translated" : ""}`}
      {...(!!id.length && { id })}
    >
      <div
        className={`overlay ${navIsOpen ? "show" : ""}`}
        onClick={handleOpenNav}
      ></div>
      {children}
      <FooterMain />
    </main>
  );
};

ViewContainer.propTypes = {
  id: PropTypes.string,
  onViewScroll: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  handleOpenNav: PropTypes.func.isRequired,
  navIsOpen: PropTypes.bool.isRequired,
};

export default ViewContainer;
