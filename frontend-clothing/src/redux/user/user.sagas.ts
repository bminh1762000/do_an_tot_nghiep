import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
  checkUserSessionSuccess,
  checkUserSessionFailure,
} from "./user.actions";

import { fetchCartStart } from "../cart/cart.actions";

import { loginApi, signUpApi } from "../../service/user";

import UserActionTypes from "./user.types";

function* signWithEmailPassword({ payload: { email, password } }: any) {
  try {
    const response = yield call(loginApi, email, password);
    yield localStorage.setItem("token", response.token);
    yield localStorage.setItem("userId", response.userId);
    yield put(signInSuccess({ ...response }));
    yield put(fetchCartStart(response.token));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signOut() {
  try {
    yield localStorage.removeItem("token");
    yield localStorage.removeItem("userId");
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

function* signUp({ payload: { email, password, displayName } }: any) {
  try {
    const response = yield call(signUpApi, email, password, displayName);
    yield put(
      signUpSuccess({ email: response.email, password: response.password })
    );
  } catch (error) {
    console.log(error.message);
    yield put(signUpFailure(error));
  }
}

function* isUserAuth() {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  if (!token || !userId) {
    yield put(checkUserSessionFailure());
  } else {
    yield put(checkUserSessionSuccess({ userId, token }));
    yield put(fetchCartStart(token));
  }
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signWithEmailPassword);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signWithEmailPassword);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION_START, isUserAuth);
}

export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onCheckUserSession),
  ]);
}
