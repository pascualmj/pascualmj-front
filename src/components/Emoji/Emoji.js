import React from "react";
import PropTypes from "prop-types";
import "./emoji.scss";

const Emoji = ({ label = "", symbol, size = "regular" }) => {
  return (
    <span
      className={`emoji ${size}`}
      role="img"
      aria-label={label ? label : ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["regular", "big", "bigger"]),
};

export default Emoji;
