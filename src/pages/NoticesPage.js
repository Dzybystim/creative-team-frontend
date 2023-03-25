import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from '../components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import css from './NoticesPage.module.css';
import { toast } from 'react-toastify';

import { getAllSelectedNotices } from '../utilities/helpers';
import { getNoticesByTitle } from '../utilities/helpers';
import { passTokenToHeadersAxios } from '../utilities/helpers';

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getNoticesByCategories } from '../utilities/helpers';

const NoticesPage = () => {
  passTokenToHeadersAxios();

  const [searchQuery, setSearchQuery] = useState('');
  const [notices, setNotices] = useState([]);
  const [selectedNotices, setSelectedNotices] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();

  const handleQueryChange = e => {
    const query = e.target.value;
    setSearchQuery(e.target.value.toLowerCase());
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }
    if (category === 'favorite' && searchQuery) {
      const findNotices = selectedNotices.filter(item =>
        item.title.includes(searchQuery)
      );
      console.log('findNotices', findNotices);
      if (findNotices.length === 0) {
        return toast.error('Nothing found for your request!');
      }
      setSelectedNotices(findNotices);
    }
    if (category !== 'favorite' && searchQuery) {
      getNoticesByTitle(searchQuery)
        .then(data => {
          const findNotices = data.filter(item => item.category === category);
          if (findNotices.length === 0) {
            return toast.error('Nothing found for your request!');
          }
          setNotices(findNotices);
        })
        .catch(error => {
          console.log('Error', error);
        });
    }

    e.target.reset();
  };

  useEffect(() => {
    const queryFromSearchParams = searchParams.get('query');
    if (!category) {
      return;
    }

    if (selectedNotices.length === 0) {
      //    console.log('getAllSelectedNotices');
      getAllSelectedNotices()
        .then(data => {
          setSelectedNotices(data);
        })
        .catch(error => {
          console.log('Error', error);
        });
    }

    if (category === 'favorite' && queryFromSearchParams) {
      //    console.log('category === favorite');
      const findNotices = selectedNotices.filter(item =>
        item.title.includes(queryFromSearchParams)
      );
      //    console.log('findNotices', findNotices);
      if (findNotices.length === 0) {
        return toast.error('Nothing found for your request!');
      }
      setSelectedNotices(findNotices);
    }
    if (queryFromSearchParams && category !== 'favorite') {
      //    console.log('queryFromSearchParams && category !== favorite');
      getNoticesByTitle(queryFromSearchParams)
        .then(data => {
          const findNotices = data.filter(item => item.category === category);
          if (findNotices.length === 0) {
            return toast.error('Nothing found for your request!');
          }
          setNotices(findNotices);
        })
        .catch(error => {
          console.log('Error', error);
        });
    }
    if (!queryFromSearchParams && category) {
      //     console.log('!queryFromSearchParams && category');
      getNoticesByCategories(category)
        .then(data => {
          setNotices(data);
        })
        .catch(error => {
          console.log('Error', error);
        });
    }
  }, [category, searchParams, selectedNotices]);

  // const [selected, setSelected] = useState(false);

  // const toggleSelected = async (id) => {
  //   setSelected(!selected);

  //   if(!selected){
  //     addToSelectedNotices(id)
  //     .then(data => {
  //       console.log("love");
  //       console.log("data", data);
  //     })
  //     .catch(error => {
  //       console.log('Error', error);
  //     });
  //   }
  //   deleteFromSelectedNotices(id)
  //   .then(data => {
  //     console.log("not love");
  //     console.log("data", data);
  //   })
  //   .catch(error => {
  //     console.log('Error', error);
  //   });
  // }

  return (
    <div className={css.container}>
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSubmit={handleSubmit}
        onChange={handleQueryChange}
      />

      <NoticesCategoriesNav />
      <NoticesCategoriesList
        notices={category === 'favorite' ? selectedNotices : notices}
      />
    </div>
  );
};

export default NoticesPage;
