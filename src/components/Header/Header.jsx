import css from './Header.module.css';
import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from 'components/Nav/Nav';
// import { BgMenu } from '../HamMenu/Burmenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';
// import { getIsRefreshing } from '../../redux/auth/selectors'
import { ReactComponent as BgMenu } from '../../images/bgMenu.svg';
import { ReactComponent as Close } from '../../images/close.svg';

export const Header = () => {
  const isLoggedIn = useSelector(selectors.isLogged);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateMenu = () => {
    setIsMenuOpen(isMenuOpen ^ 1);
  };

  window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
    if (!e.matches) return;
    setIsMenuOpen(false);
  });

  return (
    <div className={css.headerContainer}>
      <div className={css.header}>
        <Logo />
        <div className={css.menuNavDes}>
          <Nav />
        </div>
        <div className={css.btnAuthNavTabDes}>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </div>
        <div className={css.btnBurMenuMobTab} onClick={updateMenu}>
          {isMenuOpen ? (
            <Close className={css.btnBurMenu} />
          ) : (
            <BgMenu className={css.btnBurMenu} />
          )}
        </div>
      </div>
      <div>
        {isMenuOpen ? (
          <div className={css.menuModal}>
            <div className={css.btnAuthNavMob} onClick={updateMenu}>
              {isLoggedIn ? <UserNav /> : <AuthNav />}
            </div>
            <div className={css.menuNavMobTab} onClick={updateMenu}>
              <Nav />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
//<BgMenu />
