import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { selectors } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function SharedLayout() {
  const { isLogged } = selectors;
  const isLoggedIn = useSelector(isLogged);
  console.log('isLoggedIn:', isLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/" end>
          Header
        </NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/notices">Find pet</NavLink>
        <NavLink to="/friends">Our Friends</NavLink>
        <NavLink to="/users">Users</NavLink>
        <div>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
