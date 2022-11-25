const loginValidate = function (values) {
  const errors = {};

  // Validation For Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address ";
  }

  // Validation For Password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 character long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  return errors;
};

export default loginValidate;

export function registerValidate(values) {
  const errors = {};

  // Validation For Username
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username";
  }

  // Validation For Password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater than 8 and less than 20 character long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  // Validate Confirmation Password
  if (values.cpassword !== values.password) {
    errors.cpassword = "The Confirm Password confirmation does not match";
  } else if (!values.cpassword) {
    errors.cpassword = "Required";
  }

  // Validation For Email
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  return errors;
}
