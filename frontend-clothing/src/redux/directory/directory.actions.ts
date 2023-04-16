import dirActionTypes from "./directory.types";

export const fetchDirStart = () => ({
  type: dirActionTypes.FETCH_DIRECTORY_START,
});

export const fetchDirSuccess = (dirData) => ({
  type: dirActionTypes.FETCH_DIRECTORY_SUCCESS,
  payload: dirData,
});

export const fetchDirFailure = (errorMessage) => ({
  type: dirActionTypes.FETCH_DIRECTORY_FAILURE,
  payload: errorMessage,
});
