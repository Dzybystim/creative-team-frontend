import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from '../components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import { Outlet } from 'react-router-dom';
import css from './NoticesPage.module.css';
import axios from 'axios';
import { useState } from 'react';
import { getNoticesByTitle } from '../utilities/helpers';
import { passTokenToHeadersAxios } from '../utilities/helpers';

const NoticesPage = () => {
  passTokenToHeadersAxios();

  const [searchQuery, setSearchQuery] = useState('');
  const [notices, setNotices] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    getNoticesByTitle(searchQuery)
      .then(data => {
        setNotices(data);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }
  const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log('token', token);
  };
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
    console.log('clear');
  };

  const tokenFromLocalStorage = localStorage.getItem('persist:auth');
  if (tokenFromLocalStorage !== null) {
    const tokenParse = JSON.parse(tokenFromLocalStorage).token;
    const token = tokenParse.slice(1, tokenParse.length - 1);
    setAuthHeader(token);
  } else {
    clearAuthHeader();
  }
  // console.log(notices, `good`);

  return (
    <div className={css.container}>
      <h2>Find your favorite pet</h2>
      <NoticesSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSubmit}
      />

      <NoticesCategoriesNav />
      <NoticesCategoriesList arrayNotices={notices} />
      <Outlet />
    </div>
  );
};

export default NoticesPage;
