import { Header } from 'components/Header';
import { Logo } from 'components/Logo';
import { Nav } from 'components/Nav';
import { AuthNav } from 'components/AuthNav';
import { UserNav } from 'components/UserNav';

import React from 'react';
import NavState from './context/navState';
import MainMenu from './components/MainMenu';
export const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <h3 className={css.headerContainer}></h3>
      <Nav />
      <AuthNav />
      <UserNav />
      <NavState>
      <MainMenu />
    </NavState>
    </div>
  );
};