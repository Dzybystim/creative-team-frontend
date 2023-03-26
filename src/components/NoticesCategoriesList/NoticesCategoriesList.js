import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';
import { useSelector } from 'react-redux';
import { selectNotices } from '../../redux/notices/selectors';
import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = () => {
  const notices = useSelector(selectNotices);
  return (
    <>
      <AddNoticeButton />

      {notices ? (
        <ul className={css.list}>
          {notices.map(notice => {
            return <NoticeCategoryItem key={notice._id} item={notice} />;
          })}
        </ul>
      ) : null}
    </>
  );
};
