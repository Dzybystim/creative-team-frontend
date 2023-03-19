import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Button from '@mui/material/Button';
import css from './UserNav.module.css';

export const UserNav = () => {
  // const userName = useSelector(authSelectors.getUserName);
  // const dispatch = useDispatch();
  return (
    <div className={css.user}><User>
      <Button
        variant="outlined"
        size="small"
        // onClick={() => dispatch(authOperations.logOut())}
      >
        Account
      </Button>
    </User>
    </div>

  );
};