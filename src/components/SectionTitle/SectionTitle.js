import React from "react";
import PropTypes from "prop-types";
import "./sectionTitle.scss";
import zigZagImage from "../../assets/img/img_02.png";

const SectionTitle = ({ title, size = "big" }) => {
  return (
    <div className="section-title">
      <img src={zigZagImage} alt="" />
      <h2 className={size}>{title}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["big", "regular"]),
};

export default SectionTitle;
