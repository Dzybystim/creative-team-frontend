import { NavLink } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import css from '../UserNav/UserNav.module.css';

export const UserNav = () => {
  return (
    <NavLink className={css.userButton} to="/user">
      <AccountCircle sx={{ color: 'white' }} />
      <div className={css.userLink}>Account</div>
    </NavLink>
  );
};
