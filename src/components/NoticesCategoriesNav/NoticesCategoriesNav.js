import { NavLink } from 'react-router-dom';
import css from './NoticesCategoriesNav.module.css';
import { selectors } from '../../redux/auth/selectors';

export const NoticesCategoriesNav = ({ item }) => {
  const { isLogged } = selectors;
  console.log('isLogged', isLogged);

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
        <NavLink className={css.link} to="for-free">
          in good hands
        </NavLink>
      </li>

      {/* {isLoggin ? ( */}
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
      {/* ) : null} */}
    </ul>
  );
};
