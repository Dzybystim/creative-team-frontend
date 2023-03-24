import { FaSearch } from 'react-icons/fa';
import css from './NoticesSearch.module.css';
import { ReactComponent as CloseSearch } from '../../Icon/CloseSearch.svg';

export const NoticesSearch = ({
  searchQuery,
  setSearchQuery,
  onSubmit,
  onChange,
}) => {
   const onClickClear = e => {
    setSearchQuery('');
  };
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <input
        className={css.Input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={onChange}
      />
      <button className={css.Icon} type="button" onClick={onClickClear}>
        {searchQuery.length > 0 ? (
          <CloseSearch  className={css.ClearIcon}/>
        ) : (
          <FaSearch className={css.SearchIcon}  />
        )}
      </button>
    </form>
  );
};
