import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.auth}>
      <NavLink className={css.authLink} to="/login">
        Login
      </NavLink>
      <NavLink className={css.authLink} to="/signup">
        Registration
      </NavLink>
    </div>
  );
};
