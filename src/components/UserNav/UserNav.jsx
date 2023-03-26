import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import css from '../UserNav/UserNav.module.css';

export const UserNav = ({ isMenuClicked }) => {
  return (
    <>
      {!isMenuClicked && (
        <div className={css.div}>
          <ul className={css.auth}>
            <NavLink className={css.userButton} to="/user">
              <AccountCircle sx={{ color: 'white' }} />
              {/* <UserIcon/> */}
              <div className={css.userLink}>Glory to Ukraine!</div>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

UserNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
};
