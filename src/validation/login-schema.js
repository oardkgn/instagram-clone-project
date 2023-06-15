import Yup from "./validate";

export const loginSchema = Yup.object().shape({
  username: Yup.string().required(),
  passWord: Yup.string().required(),
});


