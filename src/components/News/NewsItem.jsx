import css from './News.module.css';
import { useTranslation } from 'react-i18next';

export const NewsItem = ({ url, title, description, date }) => {
  const { t } = useTranslation();
  return (
    <li className={css.item}>
      <h3 className={css.titleList}>{title}</h3>
      <p className={css.dataNews}>{description}</p>
      <div className={css.dateAndLink}>
        <p className={css.dateNews}>{date}</p>
        <a
          href={url}
          className={css.linkNews}
          target="_blank"
          rel="noreferrer noopener"
        >
          {t('read more')}
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
