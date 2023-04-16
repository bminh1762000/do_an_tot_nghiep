import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../components/SignIn";
import ErrorHandler from "../components/ErrHandler";
import { setError } from "../redux/user/user.actions";
import { selectErrorUser } from "../redux/user/user.selectors";

import styled from "styled-components";

const AuthPage = ({ error, setError }) => {
  return (
    <>
      {error && <ErrorHandler message={error} onHandle={() => setError()} />}
      <AuthContainer>
        <SignIn />
      </AuthContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectErrorUser,
});

const mapDispatchToProps = (dispatch) => ({
  setError: () => dispatch(setError()),
});

export const AuthContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  margin: 30px auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
