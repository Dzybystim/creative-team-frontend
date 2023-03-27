import css from './Header.module.css';
import React from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { BgMenu } from '../HamMenu/Burmenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';
// import { getIsRefreshing } from '../../redux/auth/selectors'

export const Header = () => {
  const isLoggedIn = useSelector(selectors.isLogged);

  return (
    <>
      <div className={css.header}>
        <Logo />
        <Nav />
        <div className={css.btnAuthNav}>
          {isLoggedIn ? <UserNav /> : <AuthNav />}
        </div>
        <BgMenu />
      </div>
    </>
  );
};
