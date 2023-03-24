import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
//import { NoticesCategoriesList } from "../components/NoticesCategoriesList/NoticesCategoriesList";
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import { Outlet } from 'react-router-dom';
import css from './NoticesPage.module.css';
import { passTokenToHeadersAxios } from "../utilities/helpers";

const NoticesPage = () => {

passTokenToHeadersAxios();

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
