//import { useSelector } from 'react-redux';
//import { authSelectors } from 'redux/auth';
// import Button from '@mui/material/Button';
// import css from './UserNav.module.css';

import Button from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/auth/fetchUser';

export const UserNav = () => {
  //  const userName = useSelector(authSelectors.getUserName);
  // const dispatch = useDispatch();
  const dispatch = useDispatch();
  const [LogOut] = useLogOutMutation();
  return (
    <div>
      <div>Button</div>

      <Button
        variant="outlined"
        size="small"
        onClick={() => {
          dispatch(LogOut());
        }}
      >
        Account
      </Button>
    </div>
  );
};

// <div>{userName}</div>
