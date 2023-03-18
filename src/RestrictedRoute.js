import { getIsLoggedIn } from 'auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isConnect = useSelector(getIsLoggedIn);
  return isConnect ? <Navigate to={redirectTo} /> : <Component />;
};
