import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from '../components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import css from './NoticesPage.module.css';
import { toast } from 'react-toastify';

import { getNoticesByTitle } from '../utilities/helpers';
import { passTokenToHeadersAxios } from '../utilities/helpers';


import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getNoticesByCategories } from '../utilities/helpers';

const NoticesPage = () => {
  passTokenToHeadersAxios();

  const [searchQuery, setSearchQuery] = useState('');
  const [notices, setNotices] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();

  const handleQueryChange = e => {
    const query = e.target.value;
    setSearchQuery(e.target.value.toLowerCase());
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }
    getNoticesByTitle(searchQuery)
      .then(data => {
        const findNotices = data.filter(item => item.category === category);
        if (findNotices.length === 0) {
          return toast.error('Nothing found for your request!');
         }
        setNotices(findNotices);
      })
      .catch(error => {
        console.log('Error', error);
      });
    e.target.reset();
  };


  useEffect(() => {
    const queryFromSearchParams = searchParams.get('query');
    if (!category) {
      return;
    }
    if (!queryFromSearchParams && category) {
      getNoticesByCategories(category)
      .then(data => {
        setNotices(data);
      })
      .catch(error => {
        console.log('Error', error);
      });
    }
    if (queryFromSearchParams){
      getNoticesByTitle(queryFromSearchParams)
      .then(data => {
        const findNotices = data.filter(item => item.category === category);
        if (findNotices.length === 0) {
          return toast.error('Nothing found for your request!');
         }
        setNotices(findNotices);
      })
      .catch(error => {
        console.log('Error', error);
      });
    }
  }, [category, searchParams]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSubmit}
        onChange={handleQueryChange}
      />

      <NoticesCategoriesNav />
      <NoticesCategoriesList notices={notices} />
    </div>
  );
};

export default NoticesPage;
