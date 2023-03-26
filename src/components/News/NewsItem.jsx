import css from './News.module.css';

export const NewsItem = ({ url, title, description, date }) => {
  return (
    <li className={css.newsItem}>
      <h3 className={css.newsTitleList}>{title}</h3>
      <p className={css.newsDescription}>{description}</p>
      <div className={css.newsDateAndLink}>
        <p className={css.newsDate}>{date}</p>
        <a
          href={url}
          className={css.newsLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Read more
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
