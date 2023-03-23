import { useState, useEffect } from 'react';
import { NoticeCategoryItem } from '../NoticeCategoryItem/NoticeCategoryItem';

import { AddNoticeButton } from '../AddNoticeButton/AddNoticeButton';
import css from './NoticesCategoriesList.module.css';
import { useLocation } from 'react-router-dom';
import { getNoticesByCategories } from '../../utilities/helpers';
import { toast } from 'react-toastify';

// const items = [
//   {
//     id: 1,
//     category: 'sell',
//     title: 'dog',
//     breed: 'kolly',
//     location: 'Lviv',
//     age: '5',
//     price: 75,
//   },
//   {
//     id: 2,
//     category: 'lost-found',
//     title: 'dog',
//     breed: 'main-kun',
//     location: 'Kiev',
//     age: '2',
//   },
//   {
//     id: 3,
//     category: 'sell',
//     title: 'dog',
//     breed: 'corgi',
//     location: 'Kharkiv',
//     age: '1',
//     price: 50,
//   },
// ];
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const NoticesCategoriesList = ({ item }) => {
  let { pathname } = useLocation();
  const [notices, setNotices] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

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



   console.log("notices",notices);

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
