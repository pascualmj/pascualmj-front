import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ initialValues, handleSubmit, children }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name) => {
    return (e) => {
      const newValue = e.target.value;
      setValues((currentState) => {
        return {
          ...currentState,
          [name]: newValue,
        };
      });
    };
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(values);
      }}
    >
      {children({ values, handleChange })}
    </form>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
