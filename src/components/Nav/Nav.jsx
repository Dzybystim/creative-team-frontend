import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

export const Nav = () => {
  return (
    <>
      <ul className={css.navigation}>
        <li className={css.navItem}>
          <NavLink className={css.linkStyled} to="/news">
            News
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.linkStyled} to="/notices/:category">
            Find Pet
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.linkStyled} to="/friends">
            Our friends
          </NavLink>
        </li>
      </ul>
    </>
  );
};
