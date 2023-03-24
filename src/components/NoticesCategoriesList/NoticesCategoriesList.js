import { useState, useEffect } from 'react';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';
import css from './NoticesCategoriesList.module.css';
import { useLocation } from 'react-router-dom';
import { getNoticesByCategories } from '../../utilities/helpers';
//import { toast } from 'react-toastify';

const NoticesCategoriesList = ({ item }) => {
  let { pathname } = useLocation();
  const [notices, setNotices] = useState([]);

  let category = pathname.split('/').pop();

  useEffect(() => {
    if (!category) {
      return;
    }
    getNoticesByCategories(category)
      .then(data => {
        setNotices(data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }, [category]);

  // console.log("notices",notices);

  // if (notices.length === 0 && status === Status.RESOLVED) {
  //   toast.error('Nothing found for your request!');
  //   return;
  // }

  return (
    <>
      <AddNoticeButton />
      <ul className={css.list}>
        {notices.map(notice => {
          return <NoticeCategoryItem key={notice._id} item={notice} />;
        })}
      </ul>
    </>
  );
};

export default NoticesCategoriesList;
