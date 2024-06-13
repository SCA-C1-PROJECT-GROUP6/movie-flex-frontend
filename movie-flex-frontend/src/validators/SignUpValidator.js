const isEmail = (email) =>
  String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const SignUpValidator = ({ name, email, password }) => {
  const errors = {
    name: "",
    email: "",
    password: "",
  };

  if (!name) {
    errors.name = "Name is required";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!isEmail(email)) {
    errors.email = "Invalid email";
  }
  if (!password) {
    errors.password = "Password required";
  } else if (password.length < 6) {
    errors.password = "password must be at least 6 characters";
  }
  return errors;
};
export default SignUpValidator;
