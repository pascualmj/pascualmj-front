import React from "react";
import PropTypes from "prop-types";
import "./viewSection.scss";

const ViewSection = ({ children }) => {
  return <section className="view-section">{children}</section>;
};

ViewSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ViewSection;
