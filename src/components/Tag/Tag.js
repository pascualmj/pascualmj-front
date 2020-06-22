import React from "react";
import PropTypes from "prop-types";
import "./tag.scss";

const Tag = ({ title }) => {
  return (
    <span className="tag">
      <i className="fas fa-tag"></i>
      {title}
    </span>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tag;
