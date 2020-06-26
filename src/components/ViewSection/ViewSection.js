import React from "react";
import PropTypes from "prop-types";
import "./viewSection.scss";

const ViewSection = ({ id = "", children }) => {
  return (
    <section className="view-section" {...(!!id.length && { id })}>
      {children}
    </section>
  );
};

ViewSection.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ViewSection;
