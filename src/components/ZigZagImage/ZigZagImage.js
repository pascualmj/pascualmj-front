import React from "react";
import PropTypes from "prop-types";
import zigZagImagePrimary from "../../assets/img/img_02.png";
import zigZagImageDarkLighter from "../../assets/img/img_03.png";
import "./zigZagImage.scss";

const ZigZagImage = ({ variant = "primary" }) => {
  return (
    <>
      <img
        className="zig-zag-image"
        src={
          variant === "primary" ? zigZagImagePrimary : zigZagImageDarkLighter
        }
        alt=""
      />
    </>
  );
};

ZigZagImage.propTypes = {
  variant: PropTypes.oneOf(["primary", "dark-lighter"]),
};

export default ZigZagImage;
