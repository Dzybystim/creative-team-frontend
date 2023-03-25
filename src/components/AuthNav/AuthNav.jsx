import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Button from '@mui/material/Button';

import css from './AuthNav.module.css';

export const AuthNav = ({ isMenuClicked }) => {
  return (
    <>
      {!isMenuClicked && (
        <ul className={css.auth}>
          <NavLink className={css.linkStyled} to="/login">
            Login
          </NavLink>
          <NavLink className={css.linkStyled} to="/register">
            Registration
          </NavLink>
        </ul>
      )}
    </>
  );
};

AuthNav.propTypes = { isMenuClicked: PropTypes.bool.isRequired };
