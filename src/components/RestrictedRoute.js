import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectors } from 'redux/auth/selectors';

export default function RestrictedRoutes() {
  const { isLogged } = selectors;
  const isLoggedIn = useSelector(isLogged);
  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ location }} replace />
  );
}
