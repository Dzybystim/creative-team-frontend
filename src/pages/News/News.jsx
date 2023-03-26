import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { fetchNews } from 'utilities/helpers';
import css from './NewsPage.module.css';
import NewsList from 'components/News/NewsList';
import InputSearch from 'components/InputSearch/InputSearch';

function NewsPage() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchNews()
      .then(setNews)
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }, []);

  const getVisibleNews = () => {
    if (searchQuery === '') {
      return news.filter(news => news.title.toLocaleLowerCase());
    } else {
      return news.filter(news =>
        news.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    }
  };

  const onSubmitSearch = e => {
    e.preventDefault();
    const searchText = e.target[0]?.value?.trim();
    setSearchQuery(searchText ? searchText : '');
    // e.target.reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>News</h2>
      <InputSearch onSubmit={onSubmitSearch} />
      {loading ? (
        <div className={css.loading}>
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <NewsList dataNewsList={getVisibleNews()} />
      )}
    </div>
  );
}

export default NewsPage;
