import { getIsLoggedIn, selectIsRefreshing } from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isConnect = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !isConnect;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
