import NewsList from 'components/News/NewsList.jsx';
import NewsFormSearch from 'components/News/NewsFormSearch.jsx';

function NewsPage() {
  return (
    <div>
      <NewsFormSearch />
      <NewsList />
    </div>
  );
}

export default NewsPage;
