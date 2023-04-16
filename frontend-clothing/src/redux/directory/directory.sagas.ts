import { takeLatest, put, all, call } from "redux-saga/effects";

import dirActionTypes from "./directory.types";

import { fetchDirFailure, fetchDirSuccess } from "./directory.actions";

import { getDirectoryApi } from "../../service/directory";

export function* fetchDirectoryAsync() {
  try {
    const response = yield call(getDirectoryApi);
    yield put(fetchDirSuccess(response.directory));
  } catch (error) {
    yield put(fetchDirFailure(error.message));
  }
}

export function* fetchDirectoryStart() {
  yield takeLatest(dirActionTypes.FETCH_DIRECTORY_START, fetchDirectoryAsync);
}

export function* directorySagas() {
  yield all([call(fetchDirectoryStart)]);
}
