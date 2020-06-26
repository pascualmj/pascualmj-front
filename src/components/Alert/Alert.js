import React from "react";
import PropTypes from "prop-types";
import "./alert.scss";

import Text from "../Text";

const Alert = ({
  text = "",
  type = "",
  show = true,
  className = "",
  handleClose = null,
}) => {
  if (!show) return null;
  return (
    <div className={`alert alert-${type} ${className}`}>
      <Text color="absence" size="small">
        {text}
      </Text>
      {handleClose && (
        <i className="fas fa-times alert-close" onClick={handleClose}></i>
      )}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["success", "error"]),
  show: PropTypes.bool,
  handleClose: PropTypes.func,
  className: PropTypes.string,
};

export default Alert;
