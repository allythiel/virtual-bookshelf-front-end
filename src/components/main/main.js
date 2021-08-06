import React from "react";
import SearchBar from "../searchBar/searchBar";
import Bookshelf from "../bookshelf/bookshelf";
import RelatedBooks from "../relatedBooks/relatedBooks";
import CurrentBook from "../currentBook/currentBook";

const Main = (props) => {
  return (
    <div className="main">
      <div>
        <div>
          <SearchBar handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} searchText={props.searchText} setSearchText={props.setSearchText}/>
        </div>
        <div>
          <Bookshelf />
        </div>
          <CurrentBook />
        <div>
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
};

export default Main;
