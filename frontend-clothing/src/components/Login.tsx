import React, { useState } from "react";

import { required, length, isEmail } from "../utils/validation";
import BreadCrumb from "./BreadCrumb";
import Container from "./Container";
import FormInput from "./FormInput";
import { emailSignInStart } from "../redux/user/user.actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    logInForm: {
      email: {
        value: "",
        valid: true,
        validators: [required, isEmail],
      },
      password: {
        value: "",
        valid: true,
        validators: [required, length({ min: 8 })],
      },
    },
    formValid: false,
  };

  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      logInForm: { email, password },
      formValid,
    } = values;
    if (!formValid) {
      alert("Form don't valid. Please enter valid form.");
      return;
    }
    emailSignInStart({ email: email.value, password: password.value });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let isValid = true;
    for (const validator of values.logInForm[name].validators) {
      isValid = isValid && validator(value);
    }
    const updatedForm = {
      ...values.logInForm,
      [name]: {
        ...values.logInForm[name],
        value: value,
        valid: isValid,
      },
    };
    let isValidForm = true;
    for (const inputName in values.logInForm) {
      isValidForm = isValidForm && values.logInForm[inputName].valid;
    }
    setValues({ logInForm: updatedForm, formValid: isValidForm });
  };
  return (
    <div className="w-100">
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <FormInput
                  name="email"
                  type="email"
                  value={values.logInForm.email.value}
                  handleChange={handleChange}
                  label="Email"
                  isValid={values.logInForm.email.valid}
                />
                <FormInput
                  name="password"
                  type="password"
                  value={values.logInForm.password.value}
                  handleChange={handleChange}
                  label="Password"
                  isValid={values.logInForm.password.valid}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(Login);
