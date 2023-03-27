import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectNotices, selectFavorites } from '../../redux/notices/selectors';
import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = () => {
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();
  const notices = useSelector(selectNotices);
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <AddNoticeButton />

      {category === 'favorite' && favorites && (
        <ul className={css.list}>
          {favorites.map(favorite => {
            return <NoticeCategoryItem key={favorite._id} item={favorite} />;
          })}
        </ul>
      )}
      
      {category !== 'favorite' && notices && (
        <ul className={css.list}>
          {notices.map(notice => {
            return <NoticeCategoryItem key={notice._id} item={notice} />;
          })}
        </ul>
      )}
    </>
  );
};
