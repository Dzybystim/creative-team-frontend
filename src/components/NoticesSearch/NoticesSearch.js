import { FaSearch } from 'react-icons/fa';
import css from './NoticesSearch.module.css';
import { ReactComponent as CloseSearch } from '../../Icon/CloseSearch.svg';

export const NoticesSearch = ({
  searchQuery,
  onSubmit,
  onChange,
}) => {
  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <div className={css.Search}>
        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={onChange}
        />
        <button className={css.Icon} type="submit">
          {searchQuery.length > 0 ? (
            <CloseSearch className={css.ClearIcon} />
          ) : (
            <FaSearch className={css.SearchIcon} />
          )}
        </button>
      </div>
    </form>
  );
};
