import moment from 'moment/moment';
import css from './News.module.css';
import { NewsItem } from './NewsItem';

export const NewsList = ({ dataNewsList }) => {
  return (
    <>
      {dataNewsList.length === 0 ? (
        <div className={css.notNewsFound}>
          <h4 className={css.notNewsFoundText}>
            Sorry, your search did not match any results.
          </h4>
        </div>
      ) : (
        <ul className={css.newsList}>
          {dataNewsList.map(({ _id, url, title, description, date }) => {
            const formatDate = moment(date, 'YYYYY-MM-DD').format('DD/MM/YYYY');
            return (
              <NewsItem
                key={_id}
                url={url}
                title={title}
                description={description}
                date={formatDate}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NewsList;
