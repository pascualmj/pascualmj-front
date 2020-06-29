import React, { useState } from "react";

import Input from "../Input";
import Textarea from "../Textarea";
import Form from "../Form";
import Button from "../Button";
import Alert from "../Alert";

import { MESSAGE_SUCCESS } from "../../config/constants";
import { contactFormValidator } from "../../config/validators";

const FormContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertData, setAlertData] = useState({
    text: "",
    type: "success",
    show: false,
  });

  const handleSubmit = (values, cleanForm) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAlertData({
        text: MESSAGE_SUCCESS,
        type: "success",
        show: true,
      });
      cleanForm(contactFormValidator.initialValues);
    }, 3000);
  };

  const closeAlert = () => {
    setAlertData((currentState) => ({
      ...currentState,
      show: false,
    }));
  };

  return (
    <Form
      initialValues={contactFormValidator.initialValues}
      handleSubmit={handleSubmit}
      dataValidator={contactFormValidator.validator}
    >
      {({ values, handleChange, errors }) => (
        <>
          <Input
            type="text"
            placeholder="Your name is..."
            value={values.fieldName}
            handleChange={handleChange("fieldName")}
            icon="fas fa-user"
            error={errors.fieldName}
            className="mb-2"
            disabled={isSubmitting}
          />
          <Input
            type="email"
            placeholder="Your email is..."
            value={values.fieldEmail}
            handleChange={handleChange("fieldEmail")}
            icon="fas fa-envelope"
            error={errors.fieldEmail}
            className="mb-2"
            disabled={isSubmitting}
          />
          <Textarea
            placeholder="Leave your message..."
            value={values.fieldMessage}
            handleChange={handleChange("fieldMessage")}
            icon="fas fa-comment"
            error={errors.fieldMessage}
            disabled={isSubmitting}
          />
          <Alert
            text={alertData.text}
            type={alertData.type}
            show={alertData.show}
            handleClose={closeAlert}
            className="mt-2"
          />
          <Button
            type="submit"
            text="Send message"
            size="big"
            className="mt-3"
            disabled={isSubmitting}
          />
        </>
      )}
    </Form>
  );
};

export default FormContact;
