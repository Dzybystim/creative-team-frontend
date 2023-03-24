import { IoLogOutOutline } from 'react-icons/io5';
import { useLogOutMutation } from 'redux/auth/fetchUser';
import css from './LogOut.module.css';

export default function UserPage() {
  const [LogOut] = useLogOutMutation();
  console.log('useLogOutMutation():', useLogOutMutation());
  const handleLogoutClick = () => {
    LogOut();
  };
  return (
    <>
      <div className={css.container_logOut}>
        <button
          type="button"
          onClick={handleLogoutClick}
          className={css.button_logOut}
        >
          <IoLogOutOutline className={css.svg_logOut} />
          <span className={css.text_logOut}>Log Out</span>
        </button>
      </div>
    </>
  );
}
