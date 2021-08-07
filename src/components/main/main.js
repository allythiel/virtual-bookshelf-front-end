import React from "react";
import SearchBar from "../searchBar/searchBar";
import Bookshelf from "../bookshelf/bookshelf";
import RelatedBooks from "../relatedBooks/relatedBooks";
import ActiveBook from "../activeBook/activeBook";

const Main = (props) => {
  return (
    <div className="main">
      <div>
        <div>
          <SearchBar handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} searchText={props.searchText} setSearchText={props.setSearchText}/>
        </div>
        <div>
          <Bookshelf /> 
          <ActiveBook currentBook={props.currentBook} setCurrentBook={props.setCurrentBook}/>
        </div>
          {/* <ActiveBook currentBook={props.currentBook} setCurrentBook={props.setCurrentBook}/> */}
        <div>
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
};

export default Main;
