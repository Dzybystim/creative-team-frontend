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

  // if(!isLogged){
  //       return toast.warn('The user must be logged in to use this functionality!');
  //         }
  //         if(category === 'favorite'){
  //           setItems(favorites);
  //         }
  //         if(category !== 'favorite'){
  //           setItems(notices);
  //         }

  // useEffect(() => {
  //   if(!isLogged){
  //     return toast.warn('The user must be logged in to use this functionality!');
  //       }
  //       if(category === 'favorite'){
  //         setItems(favorites);
  //       }
  //       if(category !== 'favorite'){
  //         setItems(notices);
  //       }
  // },[category, notices, favorites, isLogged])

  return (
    <>
      <AddNoticeButton />

      {category === 'favorite' ? (
        <ul className={css.list}>
          {favorites.map(item => {
            return <NoticeCategoryItem key={item._id} item={item} />;
          })}
        </ul>
      ) : (
        <ul className={css.list}>
          {notices.map(item => {
            return <NoticeCategoryItem key={item._id} item={item} />;
          })}
        </ul>
      )}
    </>
  );
};
