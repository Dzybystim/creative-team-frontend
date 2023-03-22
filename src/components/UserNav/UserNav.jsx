import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
// import Button from '@mui/material/Button';
// import css from './UserNav.module.css';

export const UserNav = () => {
  const userName = useSelector(authSelectors.getUserName);

  return (
    <div>
      <div>{userName}</div>
      <div>Button</div>

      {/* <Button
          variant="outlined"
          size="small"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Account
        </Button> */}
    </div>
  );
};
