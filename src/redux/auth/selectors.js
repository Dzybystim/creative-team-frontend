export const selectors = {
  getUserInfo: state => state.users.user,
  getUserId: state => state.users.user.id,
  getUserEmail: state => state.users.user.email,
  getUserCity: state => state.users.user.city,
  getUserPhone: state => state.users.user.phone,
  getToken: state => state.users.token,
  isLogged: state => state.users.isLogged,
  isLoadUser: state => state.users.loadUser,
  isErrorServer: state => state.users.errorServer,
  isErrorRegistration: state => state.users.errorRegistration,
};
export const getAuth = state => state.auth.auth;
export const getUser = ({ auth }) => auth.user;
export const getIsRefreshing = ({ auth }) => auth.isRefreshing;
export const getUserName = state => state.auth.user.name;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
