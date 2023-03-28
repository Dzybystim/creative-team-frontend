import css from './Logo.module.css';
import logo from '../../images/petly.svg';
import { NavLink } from 'react-router-dom';

export const Logo = () => {
  return (
    <NavLink className={css.logoLink} to="/">
      <img className={css.logoImg} src={logo} alt="Logo"></img>
    </NavLink>
  );
};
