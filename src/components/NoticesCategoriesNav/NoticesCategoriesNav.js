import { NavLink } from 'react-router-dom';
import css from './NoticesCategoriesNav.module.css';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';

export const NoticesCategoriesNav = ({ item }) => {
  const isLogged = useSelector(selectors.isLogged);
  // const logged = useSelector(selectors.users.isLogged);
  //  const token = useSelector(selectors.users.token);
  console.log('isLogged', isLogged);
  //console.log('logged', logged);

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <NavLink className={css.link} to="sell">
          sell
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={css.link} to="lost-found">
          lost/found
        </NavLink>
      </li>
      <li className={css.item}>
        <NavLink className={css.link || css.active} to="for-free">
          in good hands
        </NavLink>
      </li>

      {isLogged ? (
        <>
          <li className={css.item}>
            <NavLink className={css.link} to="favorite">
              favorite ads
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink className={css.link} to="own">
              my ads
            </NavLink>
          </li>
        </>
      ) : null}
    </ul>
  );
};
