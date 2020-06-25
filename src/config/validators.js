import Alfil from "alfil";

export const contactFormValidator = Alfil.createValidator({
  fieldName: Alfil.string().required().errorText("Este campo es obligatorio."),
  fieldEmail: Alfil.string()
    .email()
    .required()
    .errorText("Debes ingresar un email válido."),
  fieldMessage: Alfil.string()
    .required()
    .errorText("No te olvides de dejar tu mensaje :)"),
});
