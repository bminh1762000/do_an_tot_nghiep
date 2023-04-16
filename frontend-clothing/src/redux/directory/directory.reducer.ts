import dirActionTypes from "./directory.types";

const INITIAL_STATE = {
  isFetching: false,
  sections: [],
  errorMessage: null,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dirActionTypes.FETCH_DIRECTORY_START:
      return {
        ...state,
        isFetching: true,
      };
    case dirActionTypes.FETCH_DIRECTORY_SUCCESS:
      return {
        ...state,
        sections: action.payload,
        isFetching: false,
      };
    case dirActionTypes.FETCH_DIRECTORY_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default directoryReducer;
