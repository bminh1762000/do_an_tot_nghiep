import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import CartActionTypes from "./cart.types";

import {
  getCartItemsApi,
  addCartItemApi,
  clearItemFromCartApi,
  removeItemFromCartApi,
} from "../../service/cart";

import {
  clearCart,
  addItemSuccess,
  addItemFailure,
  removeItemSuccess,
  removeItemFailure,
  clearItemFromCartSuccess,
  clearItemFromCartFailure,
  fetchCartSuccess,
  fetchCartFailure,
} from "./cart.actions";

export function* fetchCartAsync({ payload }: any) {
  try {
    const response = yield call(getCartItemsApi, payload);
    yield put(fetchCartSuccess(response.cart));
  } catch (error) {
    yield put(fetchCartFailure(error.message));
  }
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* addToCart({ payload: { _id, token } }: any) {
  try {
    const response = yield call(addCartItemApi, _id, token);
    const cart = yield response.json();
    yield put(addItemSuccess(cart.newCart));
  } catch (error) {
    yield put(addItemFailure(error.message));
  }
}

export function* removeFromCart({ payload: { _id, token } }: any) {
  try {
    const response = yield call(removeItemFromCartApi, _id, token);
    const cart = yield response.json();
    yield put(removeItemSuccess(cart.newCart));
  } catch (error) {
    yield put(removeItemFailure(error.message));
  }
}

export function* clearItemFromCart({ payload: { _id, token } }: any) {
  try {
    const response = yield call(clearItemFromCartApi, _id, token);
    const cartData = yield response.json();
    yield put(clearItemFromCartSuccess(cartData.newCart));
  } catch (error) {
    yield put(clearItemFromCartFailure(error.message));
  }
}

export function* onFetchCartStart() {
  yield takeLatest(CartActionTypes.FETCH_CART_START, fetchCartAsync);
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onAddToCartStart() {
  yield takeLatest(CartActionTypes.ADD_ITEM_START, addToCart);
}

export function* onRemoveFromCartStart() {
  yield takeLatest(CartActionTypes.REMOVE_ITEM_START, removeFromCart);
}

export function* onClearItemFromCartStart() {
  yield takeLatest(CartActionTypes.CLEAR_ITEM_START, clearItemFromCart);
}

export function* cartSagas() {
  yield all([
    call(onFetchCartStart),
    call(onSignOutSuccess),
    call(onAddToCartStart),
    call(onRemoveFromCartStart),
    call(onClearItemFromCartStart),
  ]);
}
