import React from "react";
import PropTypes from "prop-types";
import "./viewContainer.scss";

import FooterMain from "../FooterMain";

const ViewContainer = ({ id = "", children }) => {
  return (
    <main className="view-container" {...(!!id.length && { id })}>
      {children}
      <FooterMain />
    </main>
  );
};

ViewContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ViewContainer;
