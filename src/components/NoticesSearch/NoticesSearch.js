//import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import css from './NoticesSearch.module.css';
import { Img } from '@chakra-ui/react';
import CloseSearch from '../../Icon/CloseSearch.svg';

export const NoticesSearch = ({ searchQuery, setSearchQuery }) => {
  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }
  };

  const onClickClear = () => {
    setSearchQuery('');
  };

  return (
    <div className={css.SearchForm} onSubmit={handlSubmit}>
      <input
        className={css.Input}
        type="text"
        name="searchQuery"
        value={searchQuery}
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleQueryChange}
      />
      <div className={css.Icon}>
        {searchQuery.length > 0 ? (
          <Img
            src={CloseSearch}
            onClick={onClickClear}
            className={css.ClearIcon}
          />
        ) : (
          <FaSearch className={css.SearchIcon} />
        )}
      </div>
    </div>
  );
};
