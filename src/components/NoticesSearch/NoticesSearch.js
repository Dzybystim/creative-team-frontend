import PropTypes from 'prop-types';
import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import css from './NoticesSearch.module.css';

export class NoticesSearch extends Component {
  state = {
    searchQuery: '',
  };

  handleQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handlSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      return alert('Insert correct request');
    }
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;
    return (
        <div className={css.SearchForm} onSubmit={this.handlSubmit}>
           <input
            className={css.Input} 
            type="text"
            name="searchQuery"
            value={searchQuery}
            autocomplete="off"
            autoFocus
            placeholder="Search"
            onChange={this.handleQueryChange}
            ></input>
               <button type="button">
                <FaSearch className={css.ButtonIcon } />
               </button>
        </div>
      
    );
  }
}

NoticesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};