import Yup from "./validate";

export const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username"),
  password: Yup.string().required("Please enter your password"),
  email: Yup.string()
    .required("Please enter your email")
    .matches(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
      "Email must be valid form"
    ),
  fullname: Yup.string().required("Please enter your full name"),
});
