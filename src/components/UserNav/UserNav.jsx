import { NavLink } from 'react-router-dom';
// import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import css from '../AuthNav/AuthNav.module.css';
// import css from '../UserNav/UserNav.module.css';

export const UserNav = ({ isMenuClicked }) => {
  return (
    <>
      {!isMenuClicked && (
        // <Div>
        //   <Auth>
            <NavLink className={css.userButton} to="/user">
              <AccountCircle sx={{ color: '#F59256' }} />
              {/* <UserIcon/> */}
              <div className={css.userLink} >Account</div>
            </NavLink>
        //   </Auth>
        // </Div>
      )}
    </>
  );
};

UserNav.propTypes = {
  isMenuClicked: PropTypes.bool.isRequired,
};
