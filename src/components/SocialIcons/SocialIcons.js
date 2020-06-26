import React, { useState } from "react";
import PropTypes from "prop-types";
import "./socialIcons.scss";

import List from "../List";

const SocialIcons = ({ variant = "absence", className = "" }) => {
  const [socialIcons] = useState([
    { label: "fab fa-github", url: "https://www.gosail.com.ar/" },
    { label: "fab fa-npm", url: "https://www.gosail.com.ar/" },
    { label: "fab fa-twitter", url: "https://www.gosail.com.ar/" },
    { label: "fab fa-linkedin-in", url: "https://www.gosail.com.ar/" },
  ]);

  return (
    <div className={`social-icons social-icons-${variant} ${className}`}>
      <List
        items={socialIcons}
        keyExtractor={(item) => item.label}
        renderItems={(item) => (
          <a href={item.url} rel="noopener noreferrer" target="_blank">
            <i className={item.label}></i>
          </a>
        )}
        direction="row"
        itemSpacing={20}
      />
    </div>
  );
};

SocialIcons.propTypes = {
  variant: PropTypes.oneOf(["absence", "secondary"]),
  className: PropTypes.string,
};

export default SocialIcons;
