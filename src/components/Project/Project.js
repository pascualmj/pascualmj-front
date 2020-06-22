import React from "react";
import PropTypes from "prop-types";
import "./project.scss";

import CircleImage from "../CircleImage";
import Text from "../Text";
import Chip from "../Chip";

const Project = ({ imgUrl, title, technology }) => {
  return (
    <article className="project">
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
  );
};

Project.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
};

export default Project;
