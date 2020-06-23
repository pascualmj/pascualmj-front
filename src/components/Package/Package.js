import React from "react";
import PropTypes from "prop-types";
import "./package.scss";

import Text from "../Text";

const Package = ({
  title,
  description,
  url,
  color = "#999",
  className = "",
}) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className={`package ${className}`}
      target="_blank"
    >
      <article>
        <span className="package-circle">
          <span style={{ backgroundColor: color }}></span>
        </span>
        <div className="package-body">
          <Text color="absence" font="secondary" size="small">
            {title}
          </Text>
          <Text style={{ color }} size="smaller">
            {description}
          </Text>
        </div>
      </article>
    </a>
  );
};

Package.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Package;
