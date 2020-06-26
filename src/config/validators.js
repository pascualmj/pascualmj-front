import Alfil from "alfil";
import { fieldErrorText } from "./constants";

export const contactFormValidator = {
  initialValues: {
    fieldName: "",
    fieldEmail: "",
    fieldMessage: "",
  },
  validator: Alfil.createValidator({
    fieldName: Alfil.string().required().errorText(fieldErrorText.fieldName),
    fieldEmail: Alfil.string()
      .email()
      .required()
      .errorText(fieldErrorText.fieldEmail),
    fieldMessage: Alfil.string()
      .required()
      .errorText(fieldErrorText.fieldMessage),
  }),
};
