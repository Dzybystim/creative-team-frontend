import { NoticesCategoriesNav } from "../components/NoticesCategoriesNav/NoticesCategoriesNav";
//import { NoticesCategoriesList } from "../components/NoticesCategoriesList/NoticesCategoriesList";
import {NoticesSearch} from '../components/NoticesSearch/NoticesSearch'
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const NoticesPage = () => {
     return (<div>
         <h2>Find your favorite pet</h2>
         <NoticesSearch/>

<NoticesCategoriesNav/>

<Suspense fallback={<div>Loading...</div>}>
        <Outlet />
</Suspense>

  </div>);
}

export default NoticesPage;
