import css from './InputSearch.module.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { ReactComponent as CloseSearch } from '../../Icon/CloseSearch.svg';
import { ReactComponent as Search } from '../../Icon/Search.svg';

const InputFormSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onClick = e => {
    e.preventDefault();
    onSubmit(e);
  };

  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  const onClickClear = e => {
    if (searchQuery === '') {
      return toast.warn('Request is empty');
    } else {
      onSubmit(e);
    }
    setSearchQuery('');
  };

  return (
    <>
      <form className={css.SearchForm} onSubmit={onClick}>
        <div className={css.Search}>
          <input
            className={css.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
            onChange={onChange}
            value={searchQuery}
          />
          <button className={css.Icon} type="button" onClick={onClickClear}>
            {searchQuery.length > 0 ? (
              <CloseSearch className={css.ClearIcon} />
            ) : (
              <Search className={css.SearchIcon} />
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default InputFormSearch;
