import { NoticesCategoriesNav } from "../components/NoticesCategoriesNav/NoticesCategoriesNav";
import { NoticesCategoriesList } from "../components/NoticesCategoriesList/NoticesCategoriesList";
import {NoticesSearch} from '../components/NoticesSearch/NoticesSearch'

const NoticesPage = () => {
     return (<div>
         <h2>Find your favorite pet</h2>
         <NoticesSearch/>

<NoticesCategoriesNav/>
<NoticesCategoriesList/>
  </div>);
}

export default NoticesPage;
