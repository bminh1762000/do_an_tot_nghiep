import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.sagas";
import { cartSagas } from "./cart/cart.sagas";
import { userSagas } from "./user/user.sagas";
import { directorySagas } from "./directory/directory.sagas";
import { productsSagas } from "./products/product.saga";

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(directorySagas),
    call(productsSagas),
  ]);
}
