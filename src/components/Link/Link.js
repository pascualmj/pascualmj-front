import React from "react";
import PropTypes from "prop-types";
import "./link.scss";

const Link = ({ text, url, colorVariant = "muted" }) => {
  return (
    <a
      className={`link ${colorVariant}`}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {text}
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  colorVariant: PropTypes.oneOf(["absence", "muted"]),
};

export default Link;
