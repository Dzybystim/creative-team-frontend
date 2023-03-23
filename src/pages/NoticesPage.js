import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
//import { NoticesCategoriesList } from "../components/NoticesCategoriesList/NoticesCategoriesList";
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import { Outlet } from 'react-router-dom';
import css from './NoticesPage.module.css';
import axios from 'axios';

const NoticesPage = () => {

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log('token', token)
  }
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
    console.log('clear')
  };


  const tokenFromLocalStorage = localStorage.getItem("persist:auth");
  if (tokenFromLocalStorage !== null) {
    const tokenParse = JSON.parse(tokenFromLocalStorage).token;
    const token = tokenParse.slice(1, tokenParse.length-1);
  setAuthHeader(token);

  } else {
    clearAuthHeader();
  }
  




  return (
    <div className={css.container}>
      <h2>Find your favorite pet</h2>
      <NoticesSearch />

      <NoticesCategoriesNav />

        <Outlet />
      
    </div>
  );
};

export default NoticesPage;
