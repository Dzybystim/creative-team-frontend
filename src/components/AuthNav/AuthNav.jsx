import { NavLink } from 'react-router-dom';

// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};
