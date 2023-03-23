import { Nav } from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import React from 'react';
import { NavState } from '../../context/navState';
import { MainMenu } from '../HamMenu/MainMenu';
// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

// import css from './Header.module.css';

export const Header = () => {
  //  const isLoggedIn = useSelector(authSelectors.getAuth);

  return (
    <div>
      <Nav />

      <AuthNav />
      <UserNav />

      <NavState>
        <MainMenu />
      </NavState>
    </div>
  );
};

// {isLoggedIn ? <UserNav /> : <AuthNav />}
