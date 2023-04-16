import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "./FormInput";
import CustomButton from "./CustomButton";
import { required, isEmail, length } from "../utils/validation";
import { emailSignInStart } from "../redux/user/user.actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignIn = ({ emailSignInStart }) => {
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
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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
        <div className="mt-5">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <ButtonsContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton>
            <Link to="/signup" className="button signup">
              SignUp
            </Link>
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
