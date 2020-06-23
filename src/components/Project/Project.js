import React from "react";
import PropTypes from "prop-types";
import "./project.scss";

import CircleImage from "../CircleImage";
import Text from "../Text";
import Chip from "../Chip";

const Project = ({ imgUrl, title, technology, url, className = "" }) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={`project ${className}`}
    >
      <article>
        <CircleImage imgUrl={imgUrl} alt={title} />
        <Text
          font="secondary"
          color="absence"
          size="small"
          className="project-title"
        >
          {title}
        </Text>
        <Chip text={technology} />
      </article>
    </a>
  );
};

Project.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Project;
