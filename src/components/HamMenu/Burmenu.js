// import React, {useState}  from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import { selectors } from '../../redux/auth/selectors';
// import { useSelector } from 'react-redux';
import css from './Burmenu.module.css';
// import AccountCircle from '@mui/icons-material/AccountCircle';

export const BgMenu = ({ burger_class, menu_class, updateMenu }) => {
  // const isLoggedIn = useSelector(selectors.isLogged);

  return (
    <div className="Wrapper" style={{ width: '100%', height: '100 hv' }}>
      <nav className="BG">
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <ul className="auth">
          {/* {!isLoggedIn ? (
            <>
              <NavLink className = {css.linkLogin} to="/login" onClick={updateMenu}>
                Login
              </NavLink>
              <NavLink className = {css.linkRegister} to="/register" onClick={updateMenu}>
                Registration
              </NavLink>
            </>
          ) : (
            <li>
              <NavLink className = {css.loginBg} to="/user" onClick={updateMenu}>
                <AccountCircle sx={{ color: '#F59256' }} />
                <div className = {css.linkUser}>Account</div>
              </NavLink>
            </li>
          )} */}
        </ul>
        <div className="div">
          <ul className="bgNews">
            <li className = {css.navItem} onClick={updateMenu}>
              <NavLink className = {css.inkNews} to="/news">News</NavLink>
            </li>
            <li className = {css.navItem} onClick={updateMenu}>
              <NavLink className = {css.linkNotices} to="/notices">Find pet</NavLink>
            </li>
            <li className = {css.navItem} onClick={updateMenu}>
              <NavLink className = {css.linkFriends} to="/friends">Our friends</NavLink>
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
