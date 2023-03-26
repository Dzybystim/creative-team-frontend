import React, { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { fetchNews } from 'utilities/helpers';
import css from './NewsPage.module.css';
import NewsList from 'components/News/NewsList';
import FormSearchNews from 'components/News/NewsFormSearch';

function NewsPage() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchNews()
      .then(setNews)
      .catch(error => console.error(error.message))
      .finally(() => setLoading(false));
  }, []);

  const getVisibleNews = () => {
    return news.filter(news => news.title.toLocaleLowerCase());
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>News</h2>
      <FormSearchNews />
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
