import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { selectors } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import css from './Burmenu.module.css';
import bgMenu from '../../images/bgMenu.svg';
import close from '../../images/close.svg';

export const BgMenu = () => {
  const isLoggedIn = useSelector(selectors.isLogged);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateMenu = () => {
    setIsMenuOpen(isMenuOpen ^ 1);
  };

  return (
    // <div className={css.wrapper} style={{ width: '100%', height: '100 hv' }}>
    <div className={css.burgerWrapper}>
      <nav className={css.bg}>
        <div className={css.burgerMenu} onClick={updateMenu}>
          {isMenuOpen ? (
            <img src={close} alt="close" />
          ) : (
            <img src={bgMenu} alt="touch" />
          )}
        </div>
      </nav>
      {/* <div className={menu_class}> */}
      <div>
        {isMenuOpen ? (
          <>
            <div className={css.authBurgerMenu}>
              {isLoggedIn ? (
                <NavLink
                  className={css.loginBg}
                  to="/user"
                  onClick={updateMenu}
                >
                  <AccountCircle sx={{ color: 'white' }} />
                  <div className={css.linkUser}>Account</div>
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className={css.linkSt}
                    to="/login"
                    onClick={updateMenu}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className={css.linkSt}
                    to="/signup"
                    onClick={updateMenu}
                  >
                    Registration
                  </NavLink>
                </>
              )}
            </div>
            <div className={css.divMenu}>
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
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
