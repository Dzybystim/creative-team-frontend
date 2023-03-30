import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.auth}>
      <span>
        <NavLink className={css.authLink} to="/login">
          Login
        </NavLink>
      </span>
      <span>
        <NavLink className={css.authLink} to="/signup">
          Registration
        </NavLink>
      </span>
    </div>
  );
};
