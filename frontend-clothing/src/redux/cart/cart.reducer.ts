import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  error: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_SUCCESS:
    case CartActionTypes.REMOVE_ITEM_SUCCESS:
    case CartActionTypes.CLEAR_ITEM_SUCCESS:
    case CartActionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case CartActionTypes.ADD_ITEM_FAILURE:
    case CartActionTypes.REMOVE_ITEM_FAILURE:
    case CartActionTypes.CLEAR_ITEM_FAILURE:
    case CartActionTypes.FETCH_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
