import Alfil from "alfil";
import { FIELD_ERROR_TEXT } from "./constants";

export const contactFormValidator = {
  initialValues: {
    fieldName: "",
    fieldEmail: "",
    fieldMessage: "",
  },
  validator: Alfil.createValidator({
    fieldName: Alfil.string().required().errorText(FIELD_ERROR_TEXT.fieldName),
    fieldEmail: Alfil.string()
      .email()
      .required()
      .errorText(FIELD_ERROR_TEXT.fieldEmail),
    fieldMessage: Alfil.string()
      .required()
      .errorText(FIELD_ERROR_TEXT.fieldMessage),
  }),
};
