import PropTypes from 'prop-types'; 
import css from './NoticesSearch.module.css';
import { ReactComponent as CloseSearch } from '../../Icon/CloseSearch.svg';
import { ReactComponent as Search } from '../../Icon/Search.svg';
import  debounce  from 'lodash.debounce';


export const NoticesSearch = ({ searchQuery, onSubmit, onChange }) => {
const debounceF = debounce(onChange, 1000);

  return (
    <form className={css.SearchForm} onSubmit={onSubmit}>
      <div className={css.Search}>
        <input
          className={css.Input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={debounceF}
        />
        <button className={css.Icon} type="submit">
          {searchQuery.length > 0 ? (
            <CloseSearch className={css.ClearIcon} />
          ) : (
            <Search className={css.SearchIcon} />
          )}
        </button>
      </div>
    </form>
  );
};


NoticesSearch.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
