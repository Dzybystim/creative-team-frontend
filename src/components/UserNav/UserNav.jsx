import { NavLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import css from '../UserNav/UserNav.module.css';

export const UserNav = () => {
  return (
    <div className={css.divTest}>
      <div className={css.auth}>
        <NavLink className={css.userButton} to="/user">
          <AccountCircle sx={{ color: 'white' }} />
          <div className={css.userLink}>Account</div>
        </NavLink>
      </div>
    </div>
  );
};
