import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { selectors } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import css from './Burmenu.module.css';

export const BgMenu = ({ burger_class, menu_class, updateMenu }) => {
  const isLoggedIn = useSelector(selectors.isLogged);

  return (
    <div className={css.wrapper} style={{ width: '100%', height: '100 hv' }}>
      <nav className={css.bg}>
        <div className={css.burgerMenu} onClick={updateMenu}>
          <div className={css.burger_class}></div>
          <div className={css.burger_class}></div>
          <div className={css.burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className={css.auth}>
          {!isLoggedIn ? (
            <>
              <NavLink
                className={css.linkLogin}
                to="/login"
                onClick={updateMenu}
              >
                Login
              </NavLink>
              <NavLink
                className={css.linkRegister}
                to="/signup"
                onClick={updateMenu}
              >
                Registration
              </NavLink>
            </>
          ) : (
            <li>
              <NavLink className={css.loginBg} to="/user" onClick={updateMenu}>
                <AccountCircle sx={{ color: '#F59256' }} />
                <div className={css.linkUser}>Account</div>
              </NavLink>
            </li>
          )}
        </ul>
        <div className={css.div}>
          <ul className={css.bgNews}>
            <li className={css.navItem} onClick={updateMenu}>
              <NavLink className={css.linkStyled} to="/news">
                News
              </NavLink>
            </li>
            <li className={css.navItem} onClick={updateMenu}>
              <NavLink className={css.linkStyled} to="/notices/:category">
                Find pet
              </NavLink>
            </li>
            <li className={css.navItem} onClick={updateMenu}>
              <NavLink className={css.linkStyled} to="/friends">
                Our friends
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

BgMenu.propTypes = {
  burger_class: PropTypes.string.isRequired,
  menu_class: PropTypes.string.isRequired,
  updateMenu: PropTypes.func.isRequired,
};
