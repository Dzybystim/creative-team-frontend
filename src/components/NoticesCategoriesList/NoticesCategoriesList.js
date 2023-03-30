import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';
import { useEffect } from 'react';
import { 
  useDispatch, 
  useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectors } from '../../redux/auth/selectors';
import { selectNotices, selectFavorites } from '../../redux/notices/selectors';
import {
  getAllSelectedNotices,
} from '../../redux/notices/operations';
import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = () => {
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();
  const notices = useSelector(selectNotices);
  const favorites = useSelector(selectFavorites);


  const dispatch = useDispatch();
  const isLogged = useSelector(selectors.isLogged);

  useEffect(() => {
    if (!isLogged) {
      return;
    }
    dispatch(getAllSelectedNotices());
    return;
  }, [dispatch, isLogged]);


  return (
    <>
      <AddNoticeButton />   
      
      {category === 'favorite' ? 
      <>
      {favorites.length === 0 && <h2 className={css.header_not_found}>Pets not found 😔</h2>}
      <ul className={css.list}>
        {favorites.map(item => {
          return <NoticeCategoryItem key={item._id} item={item} />;
        })}
      </ul>
      </>
     : 
     <>
     {notices.length === 0 && <h2 className={css.header_not_found}>Pets not found 😔</h2>}
      <ul className={css.list}>
        {notices.map(item => {
          return <NoticeCategoryItem key={item._id} item={item} />;
        })}
      </ul>
      </>
    }
    </>
  );
};
