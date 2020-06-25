import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.scss";

import Text from "../Text";

const Input = ({
  type,
  value = "",
  handleChange,
  placeholder = "",
  icon = "",
  error = "",
  className = "",
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`field-input-container ${className}`}>
      <div
        className={`field-input ${isFocused ? "field-focused" : ""} ${
          error ? "has-error" : ""
        } ${disabled ? "field-disabled" : ""}`}
      >
        {icon && <i className={`${icon} fa-fw`}></i>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
      </div>
      {!!error && (
        <Text size="smaller" className="field-input-error">
          {error}
        </Text>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "number", "password"]).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
