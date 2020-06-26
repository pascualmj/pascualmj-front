import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({
  initialValues,
  handleSubmit,
  dataValidator = null,
  children,
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initializeErrors(initialValues));

  function initializeErrors(fields) {
    const result = {};
    for (let key in fields) {
      result[key] = fields[key];
    }
    return result;
  }

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

  const runValidations = () => {
    if (!dataValidator) return;
    const { isValid, data } = dataValidator.validate(values);
    for (let key in data) {
      setErrors((currentErrors) => {
        return {
          ...currentErrors,
          [key]: data[key].errors ? data[key].errors[0] : "",
        };
      });
    }
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!runValidations()) return;
    handleSubmit(values, (newValues) => {
      setValues(newValues);
    });
  };

  return (
    <form onSubmit={submitHandler} noValidate>
      {children({ values, handleChange, errors })}
    </form>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  dataValidator: PropTypes.object,
  children: PropTypes.any,
};

export default Form;
