import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.auth}>
      <NavLink className={css.linkStyled} to="/login">
        Login
      </NavLink>
      <NavLink className={css.linkStyled} to="/signup">
        Registration
      </NavLink>
    </div>
  );
};
