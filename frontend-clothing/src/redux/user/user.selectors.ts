import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.userId
);

export const selectTokenId = createSelector([selectUser], (user) => user.token);

export const selectErrorUser = createSelector(
  [selectUser],
  (user) => user.error
);
