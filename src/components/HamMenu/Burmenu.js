import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { selectors } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import css from './Burmenu.module.css';
import bgMenu from '../../images/bgMenu.svg';
import close from '../../images/close.svg';

export const BgMenu = ({ burger_class, menu_class, updateMenu }) => {
  const isLoggedIn = useSelector(selectors.isLogged);

  return (
    <div className={css.wrapper} style={{ width: '100%', height: '100 hv' }}>
      <nav className={css.bg}>
        <div className={css.burgerMenu} onClick={updateMenu}>
          <img className={burger_class} src={bgMenu} alt="touch" />
          <img className={burger_class} src={close} alt="close" />
        </div>
      </nav>
      <div className={menu_class}>
        <ul className={css.auth}>
          {!isLoggedIn ? (
            <>
              <NavLink className={css.linkSt} to="/login" onClick={updateMenu}>
                Login
              </NavLink>
              <NavLink className={css.linkSt} to="/signup" onClick={updateMenu}>
                Registration
              </NavLink>
            </>
          ) : (
            <li>
              <NavLink className={css.loginBg} to="/user" onClick={updateMenu}>
                <AccountCircle sx={{ color: 'white' }} />
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
              <NavLink className={css.linkStyled} to="/notices/sell">
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
