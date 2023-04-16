import { takeLatest, put, all, call } from "redux-saga/effects";

import { ActionTypes } from ".";

import { fetchProductsSuccess, fetchProductsFailure } from ".";

import { getProductsApi } from "../../service/product";

export function* fetchProductsAsync() {
  try {
    const response = yield call(getProductsApi);
    yield put(fetchProductsSuccess(response.products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* fetchProductsStart() {
  yield takeLatest(ActionTypes.FETCH_PRODUCTS_START, fetchProductsAsync);
}

export function* productsSagas() {
  yield all([call(fetchProductsStart)]);
}
