import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  token: null,
  isAuth: false,
  userId: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userId: action.payload.userId,
        token: action.payload.token,
        error: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        userId: null,
        token: null,
      };
    case UserActionTypes.CHECK_USER_SESSION_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userId: action.payload.userId,
        token: action.payload.token,
      };
    case UserActionTypes.CHECK_USER_SESSION_FAILURE:
      return {
        ...state,
        isAuth: false,
        userId: null,
        token: null,
      };
    case UserActionTypes.SET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
