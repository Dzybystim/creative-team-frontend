import { NoticesCategoriesNav } from '../../components/NoticesCategoriesNav/NoticesCategoriesNav';
import { NoticesCategoriesList } from '../../components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesSearch } from '../../components/NoticesSearch/NoticesSearch';
import css from './NoticesPage.module.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/notices/selectors';
import { selectors } from '../../redux/auth/selectors';

import {
  getNoticesByCategories,
  getNoticesByTitle,
  getAllSelectedNotices,
  getAllOwnNotices,
} from '../../redux/notices/operations';
import { filterFavorites, filterOwn } from '../../redux/notices/noticesSlice';

import { passTokenToHeadersAxios } from '../../utilities/helpers';
import { Loader } from '../../components/Loader/Loader';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLogged = useSelector(selectors.isLogged);

  passTokenToHeadersAxios();

  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  let { pathname } = useLocation();
  let category = pathname.split('/').pop();

  useEffect(() => {
    if (!isLogged) {
      return;
    }
    dispatch(getAllSelectedNotices());
    return;
  }, [dispatch, isLogged]);

  useEffect(() => {
    const queryFromSearchParams = searchParams.get('query');

    if (!category) {
      return;
    }
    if (category === 'favorite') {
      if (!queryFromSearchParams) {
        dispatch(getAllSelectedNotices());
        return;
      }
      dispatch(filterFavorites(queryFromSearchParams));
      return;
    }
    if (category === 'own') {
      if (!queryFromSearchParams) {
        dispatch(getAllOwnNotices());
        return;
      }
      dispatch(filterOwn(queryFromSearchParams));
      return;
    }
    if (category === 'sell') {
      if (!queryFromSearchParams) {
        dispatch(getNoticesByCategories(category));
        return;
      }
      dispatch(getNoticesByTitle({ category, queryFromSearchParams }));
      return;
    }
    if (category === 'lost-found') {
      if (!queryFromSearchParams) {
        dispatch(getNoticesByCategories(category));
        return;
      }

      dispatch(getNoticesByTitle({ category, queryFromSearchParams }));
      return;
    }
    if (category === 'for-free') {
      if (!queryFromSearchParams) {
        dispatch(getNoticesByCategories(category));
        return;
      }
      dispatch(getNoticesByTitle({ category, queryFromSearchParams }));
    }
  }, [category, dispatch, searchParams]);

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
    setSearchParams('');
  };

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

      {isLoading && !error && <Loader />}

      {error &&
        toast.error(
          `Oops, something went wrong! Reload the page or try again later!`
        )}

      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
