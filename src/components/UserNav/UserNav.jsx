// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

// import css from './UserNav.module.css';

// import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth/fetchUser';

export const UserNav = () => {
  // const userName = useSelector(authSelectors.getUserName);
  // const dispatch = useDispatch();

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        <AccountCircle sx={{ color: '#1976d2' }} />
        <>
          <NavLink to="user">User</NavLink>
        </>
        {/* <div>{userName}</div> */}
      </Button>
    </div>
  );
};
