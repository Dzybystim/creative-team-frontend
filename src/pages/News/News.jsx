import css from './NewsPage.module.css';
import NewsList from 'components/News/NewsList';
// import FormSearchNews from 'components/News/NewsFormSearch';

function NewsPage() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>News</h2>
      {/* <FormSearchNews /> */}
      <NewsList />
    </div>
  );
}

export default NewsPage;
