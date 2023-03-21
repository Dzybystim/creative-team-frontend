import { Outlet, NavLink } from 'react-router-dom';


export default function SharedLayout() {
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

        <NavLink to="/user">User</NavLink>

      </nav>
      <Outlet />
    </>
  );
}
