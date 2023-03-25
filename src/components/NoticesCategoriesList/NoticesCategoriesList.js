import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';
import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';

import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = ({ notices }) => {
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
