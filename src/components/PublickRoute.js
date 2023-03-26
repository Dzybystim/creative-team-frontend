import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectors } from 'redux/auth/selectors';

export default function PublicRoutes() {
  const { isLogged } = selectors;
  const isLoggedIn = useSelector(isLogged);
  const location = useLocation();

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/user" state={{ location }} replace />
  );
}
