import React from "react";
import PropTypes from "prop-types";
import "./viewContainer.scss";

import FooterMain from "../FooterMain";

const ViewContainer = ({ children }) => {
  return (
    <main className="view-container">
      {children}
      <FooterMain />
    </main>
  );
};

ViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewContainer;
