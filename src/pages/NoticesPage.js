import { NoticesCategoriesNav } from '../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from '../components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from '../components/NoticesSearch/NoticesSearch';
import css from './NoticesPage.module.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectors } from '../redux/auth/selectors';

import { getAllSelectedNotices } from '../utilities/helpers';
import { getNoticesByTitle } from '../utilities/helpers';
import { passTokenToHeadersAxios } from '../utilities/helpers';

import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getNoticesByCategories } from '../utilities/helpers';
import {
  addToSelectedNotices,
  deleteFromSelectedNotices,
} from '../utilities/helpers';

const NoticesPage = () => {
  passTokenToHeadersAxios();

  const [searchQuery, setSearchQuery] = useState('');
  const [notices, setNotices] = useState([]);
  const [selectedNotices, setSelectedNotices] = useState([]);
  const isLogged = useSelector(selectors.isLogged);

  const [searchParams, setSearchParams] = useSearchParams();
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();

  const handleQueryChange = e => {
    const query = e.target.value;
    setSearchQuery(e.target.value.toLowerCase());
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onClickClear = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }

    e.target.reset();
    setSearchQuery('');
  };

    // if (category === 'favorite' && (searchQuery)) {
    //   if (selectedNotices.length === 0) {
    //     setSelectedNotices('');
    //     return toast.error('Nothing found for your request!');
    //    }
    //   const findNotices = selectedNotices.filter(item => item.title.includes(searchQuery));
    //   if (findNotices.length === 0) {
    //     setSelectedNotices('');
    //     return toast.error('Nothing found for your request!');
    //    }
    //    setSelectedNotices(findNotices);
    // }
    // if (category !== 'favorite' && (searchQuery)){
    //   getNoticesByTitle(searchQuery)
    //         .then(data => {
    //           if (data.length === 0) {
    //             setNotices('');
    //             return toast.error('Nothing found for your request!');
    //            }
    //           const findNotices = data.filter(item => item.category === category);
    //           if (findNotices.length === 0) {
    //             setNotices('');
    //             return toast.error('Nothing found for your request!');
    //           }
    //           setNotices(findNotices);
    //         })
    //         .catch(error => {
    //           console.log('Error', error);
    //         });
    // }
  

  useEffect(() => {
    console.log('selectedNotices', selectedNotices);
    if(selectedNotices.length === 0 && isLogged) {
      console.log('selectedNotices.length === 0 && isLogged', selectedNotices.length === 0 && isLogged);
      getAllSelectedNotices()
            .then(data => {
              setSelectedNotices(data);
            })
            .catch(error => {
              console.log('Error', error);
            });
      }
  },[isLogged])


  useEffect(() => {
    const queryFromSearchParams = searchParams.get('query');
    if (!category) {
      return;
    }


    if (category === 'favorite' && isLogged) {
      const findNotices = selectedNotices.filter(item => item.title.includes(queryFromSearchParams));
  //    console.log('findNotices', findNotices);

      if (findNotices.length === 0) {
        return toast.error('Nothing found for your request!');
      }
      setSelectedNotices(findNotices);
    }

    if (category !== 'favorite') {

      getNoticesByCategories(category)
        .then(data => {
          setNotices(data);
        })
        .catch(error => {
          console.log('Error', error);
        });
    }
  }, [category, searchParams, selectedNotices, isLogged]);

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
        onSubmit={onClickClear}
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
