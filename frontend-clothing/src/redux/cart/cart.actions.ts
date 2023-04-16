import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const clearItemFromCartStart = (itemId) => ({
  type: CartActionTypes.CLEAR_ITEM_START,
  payload: itemId,
});

export const clearItemFromCartSuccess = (newCart) => ({
  type: CartActionTypes.CLEAR_ITEM_SUCCESS,
  payload: newCart,
});

export const clearItemFromCartFailure = (error) => ({
  type: CartActionTypes.CLEAR_ITEM_FAILURE,
  payload: error,
});

export const addItemStart = (itemId) => ({
  type: CartActionTypes.ADD_ITEM_START,
  payload: itemId,
});

export const addItemSuccess = (newCart) => ({
  type: CartActionTypes.ADD_ITEM_SUCCESS,
  payload: newCart,
});

export const addItemFailure = (error) => ({
  type: CartActionTypes.ADD_ITEM_FAILURE,
  payload: error,
});

export const removeItemStart = (itemId) => ({
  type: CartActionTypes.REMOVE_ITEM_START,
  payload: itemId,
});

export const removeItemSuccess = (newCart) => ({
  type: CartActionTypes.REMOVE_ITEM_SUCCESS,
  payload: newCart,
});

export const removeItemFailure = (error) => ({
  type: CartActionTypes.REMOVE_ITEM_FAILURE,
  payload: error,
});

export const fetchCartStart = (token) => ({
  type: CartActionTypes.FETCH_CART_START,
  payload: token
});

export const fetchCartSuccess = (cart) => ({
  type: CartActionTypes.FETCH_CART_SUCCESS,
  payload: cart,
});

export const fetchCartFailure = (error) => ({
  type: CartActionTypes.FETCH_CART_FAILURE,
  payload: error,
});
