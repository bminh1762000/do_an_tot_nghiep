import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignUp from "../components/SignUp";
import ErrorHandler from "../components/ErrHandler";
import { setError } from "../redux/user/user.actions";
import { selectErrorUser } from "../redux/user/user.selectors";
import { AuthContainer } from "./Login";

const AuthPage = ({ error, setError }) => {
  return (
    <>
      {error && <ErrorHandler message={error} onHandle={() => setError()} />}
      <AuthContainer>
        <SignUp />
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

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
