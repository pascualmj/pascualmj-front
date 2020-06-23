import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.scss";

const Input = ({
  type,
  value = "",
  handleChange,
  placeholder = "",
  icon = "",
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`field-input ${isFocused ? "field-focused" : ""} ${className}`}
    >
      {icon && <i className={`${icon} fa-fw`}></i>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "number", "password"]).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
