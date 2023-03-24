import css from './Header.module.css';
import React from 'react';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Nav } from 'components/Nav/Nav';
import { BgMenu } from '../HamMenu/Burmenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';
// import { getIsRefreshing } from '../../redux/auth/selectors'

export const Header = () => {
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const isLoggedIn = useSelector(selectors.isLogged);
  // const isRefreshing = useSelector(getIsRefreshing);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={css.headerWrapper}>
        <div className={css.wrapper}>
          <Logo />
          <Nav />
        </div>
        <div className={css.userWrapper}>
          {!isLoggedIn ? (
            <AuthNav isMenuClicked={isMenuClicked} />
          ) : (
            <UserNav isMenuClicked={isMenuClicked} />
          )}
          <BgMenu
            burger_class={burger_class}
            menu_class={menu_class}
            updateMenu={updateMenu}
          />
        </div>
      </div>
    </>
  );
};
