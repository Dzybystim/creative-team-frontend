
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import css from './NoticesSearch.module.css';

export function NoticesSearch({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.warn('Insert correct request');
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (  
      <div className={css.SearchForm} onSubmit={handlSubmit}>
        
      <input
          className={css.Input} 
          type="text"
          name="searchQuery"
          value={searchQuery}
          autocomplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleQueryChange}
      ></input>
            <button type="button">
                 <FaSearch className={css.ButtonIcon } />
            </button>
      </div>
  );
}
