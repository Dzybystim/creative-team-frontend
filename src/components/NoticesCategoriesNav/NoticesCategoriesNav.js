import { NavLink } from 'react-router-dom';
import css from './NoticesCategoriesNav.module.css';
import { useSelector } from 'react-redux';
import { selectors } from '../../redux/auth/selectors';
import { useLocation } from 'react-router-dom';


export const NoticesCategoriesNav = () => {
  const isLogged = useSelector(selectors.isLogged);

  const location = useLocation();


  const onlyPublicCategories = [
    { sell: 'sell' },
    { 'lost-found': 'lost/found' },
    { 'for-free': 'in good hands' },
  ];
  const allCategories = [
    { sell: 'sell' },
    { 'lost-found': 'lost/found' },
    { 'for-free': 'in good hands' },
    { favorite: 'favorite ads' },
    { own: 'my ads' },
  ];


  return (
    <>
      {!isLogged ? (
        <ul className={css.list}>
          {onlyPublicCategories.map(category => {
            return (
              <li className={css.item} key={Object.keys(category)}>
                <NavLink
                  className={css.link}
                  to={`/notices/${Object.keys(category)}`}
                  state={{ from: location }}
                >
                  {Object.values(category)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className={css.list}>
          {allCategories.map(category => {
            return (
              <li className={css.item} key={Object.keys(category)}>
                <NavLink
                  className={css.link}
                  to={`/notices/${Object.keys(category)}`}
                  state={{ from: location }}
                >
                  {Object.values(category)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>

  );
};
