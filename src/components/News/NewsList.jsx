// import React from 'react';
// import { NewsItem } from './NewsItem';
// import css from './News.module.css';
// import { fetchNews } from 'utilities/helpers';

// export const NewsList = () => {
//   const { data } = fetchNews();

//   const getVisibleNews = () => {
//     const normalizedFil = onFilter.toLocaleLowerCase();
//     return data.filter((news) => news.title.toLocaleLowerCase().includes(normalizedFil));
//   };

//   return (
//     <>
//       {!data ? (
//         <div className={css.notNewsFound}>
//           <h3 className={css.notNewsFoundText}>Waiting please...</h3>
//         </div>
//       ) : (
//         <ul className={css.newsList}>
//           {getVisibleNews().length === 0 ? (
//             <div className={css.notNewsFound}>
//               <h3 className={css.notNewsFoundText}>Sorry, your search did not match any results.</h3>
//             </div>
//           ) : (
//             getVisibleNews().map(({ url, title, description, date, linkNews }) => {
//               return <NewsItem key={url} url={url} title={title} description={description} date={date} />;
//             })
//           )}
//         </ul>
//       )}
//     </>
//   );
// };

// export default NewsList;
