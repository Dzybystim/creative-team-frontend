export const getAuth = state => state.auth.auth;
export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
