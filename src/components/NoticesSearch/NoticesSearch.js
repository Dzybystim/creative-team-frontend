
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import css from './NoticesSearch.module.css';
import { MdClear } from "react-icons/md";

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

  const onClickClear = () => {
    setSearchQuery('');
  }
  
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
            <div >
        {searchQuery.length > 0 ? (<button type="button"  onClick={onClickClear}><MdClear className={css.ClearIcon}/></button>):
                                  (<FaSearch className={css.SearchIcon} />)}
            </div>
      </div>
  );
}
