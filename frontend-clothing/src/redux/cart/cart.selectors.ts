import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectorCartItems],
  (cartItems) =>
    cartItems
      ? cartItems.reduce(
          (accumulatedQuantity, cartItems) =>
            accumulatedQuantity + cartItems.quantity,
          0
        )
      : 0
);

export const selectCartTotal = createSelector(
  [selectorCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.product.price,
      0
    )
);
