import { IoLogOutOutline } from 'react-icons/io5';
import {useLogOutMutation} from 'redux/auth/fetchUser';
import { useNavigate } from 'react-router-dom';
import css from './LogOut.module.css';

export default function UserPage() {
    const [LogOut] = useLogOutMutation();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        LogOut();
        navigate('/')
    }

  return (
    <>
      <div className={css.container_logOut}>
        <button type="button" 
        className={css.button_logOut}
        onClick={handleLogoutClick}>
          <IoLogOutOutline className={css.svg_logOut} />
          <span className={css.text_logOut}>Log Out</span>
        </button>
      </div>
    </>
  );
}
