import React, { useState } from "react";
import PropTypes from "prop-types";
import "./textarea.scss";

import Text from "../Text";

const Textarea = ({
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
    <div className={`field-textarea-container ${className}`}>
      <div
        className={`field-textarea ${isFocused ? "field-focused" : ""} ${
          error ? "has-error" : ""
        } ${disabled ? "field-disabled" : ""}`}
      >
        {icon && <i className={`${icon} fa-fw`}></i>}
        <textarea
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue={value}
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

Textarea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Textarea;
