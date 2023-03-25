import React, { useEffect, useState } from 'react';
import css from './News.module.css';
import { NewsItem } from './NewsItem';
import { fetchNews } from 'utilities/helpers';
import { Dna } from 'react-loader-spinner';

export const NewsList = () => {
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
    <>
      {loading ? (
        <div className={css.notNewsFound}>
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
        <ul className={css.newsList}>
          {getVisibleNews().length === 0 ? (
            <div className={css.notNewsFound}>
              <h3 className={css.notNewsFoundText}>
                Sorry, your search did not match any results.
              </h3>
            </div>
          ) : (
            getVisibleNews().map(({ _id, url, title, description, date }) => {
              return (
                <NewsItem
                  key={_id}
                  url={url}
                  title={title}
                  description={description}
                  date={date}
                />
              );
            })
          )}
        </ul>
      )}
    </>
  );
};

export default NewsList;
