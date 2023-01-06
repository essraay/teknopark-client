import Yup from "./validation"

const message = "İşaretle"

export const FormSchema = Yup.object().shape({
  nameSurname: Yup.string().required(),
  adress: Yup.string().required(),
  email: Yup.string().email().required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
  kvkk: Yup.boolean().oneOf([true], message).required(),
  acikRiza: Yup.boolean().oneOf([true], message).required(),
})
