import React from "react";
import PropTypes from "prop-types";
import "./sectionTitle.scss";

import ZigZagImage from "../ZigZagImage";

const SectionTitle = ({ title, size = "big" }) => {
  return (
    <div className="section-title">
      <ZigZagImage />
      <h2 className={size}>{title}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["big", "regular"]),
};

export default SectionTitle;
