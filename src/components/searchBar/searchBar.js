import React from 'react';
import './searchBar.css'

const SearchBar = (props) => {

    return (
        <div>
        <div id='search-bar'>
            <form onSubmit={
                (event) => {
                    props.handleSearchSubmit(event)
                }
            }>
            <input type='text' name='search'
                onChange={props.handleSearchChange}
                value={props.searchText}
                placeholder='Search For A Book'></input>
            </form>
        </div>
        </div>
    )
}

export default SearchBar
