import React, { useState } from "react";
import PropTypes from "prop-types";
import "./textarea.scss";

const Textarea = ({
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
      className={`field-textarea ${
        isFocused ? "field-focused" : ""
      } ${className}`}
    >
      {icon && <i class={`${icon} fa-fw`}></i>}
      <textarea
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {value}
      </textarea>
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default Textarea;
