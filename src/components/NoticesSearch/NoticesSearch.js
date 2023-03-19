
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import css from './NoticesSearch.module.css';
import { MdClear } from "react-icons/md";
import { IconContext } from "react-icons";

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
      <form className={css.SearchForm} onSubmit={handlSubmit}>
         <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
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
      {searchQuery.length > 0 
      ? 
      <button type="button" onClick={onClickClear} className={css.icon_container}>
      <MdClear />
      </button>
      : 
      <div className={css.icon_container}>
      <FaSearch />

      </div>
       }
         </IconContext.Provider>
      </form>
  );
}

//<div >
//{searchQuery.length > 0 ? (<button type="button" onClickClear={onClickClear}><MdClear className={css.ClearIcon}/></button>):
//                          (<FaSearch className={css.SearchIcon} />)}
//    </div>