import UserActionTypes from "./user.types";

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = (userData) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: userData,
});

export const signUpFailure = (error) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSessionSuccess = (userData) => ({
  type: UserActionTypes.CHECK_USER_SESSION_SUCCESS,
  payload: userData,
});

export const checkUserSessionFailure = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_FAILURE,
});

export const checkUserSessionStart = () => ({
  type: UserActionTypes.CHECK_USER_SESSION_START,
});

export const setError = () => ({
  type: UserActionTypes.SET_ERROR,
});
