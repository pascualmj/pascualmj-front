import React from "react";
import PropTypes from "prop-types";
import "./chip.scss";

const Chip = ({ text, variant = "dark", size = "small" }) => {
  return (
    <div className={`chip chip-${variant} chip-${size}`}>
      <span>{text}</span>
    </div>
  );
};

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["dark", "alternative"]),
  size: PropTypes.oneOf(["small", "big"]),
};

export default Chip;
