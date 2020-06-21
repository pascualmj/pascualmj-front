import React from "react";
import PropTypes from "prop-types";
import "./text.scss";

const Text = ({
  font = "primary",
  color = "secondary",
  size = "regular",
  children,
  className,
}) => {
  return (
    <p className={`text font-${font} color-${color} size-${size} ${className}`}>
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  font: PropTypes.oneOf(["primary", "secondary"]),
  color: PropTypes.oneOf([
    "secondary",
    "primary",
    "alternative",
    "absence",
    "dark-lighter",
  ]),
  size: PropTypes.oneOf(["regular", "small", "smaller"]),
};

export default Text;
