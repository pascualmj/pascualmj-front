import React from "react";
import PropTypes from "prop-types";
import "./circleImage.scss";

const CircleImage = ({ imgUrl, alt, size = 70 }) => {
  return (
    <figure
      className="circle-image"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <img src={imgUrl} alt={alt} />
    </figure>
  );
};

CircleImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default CircleImage;
