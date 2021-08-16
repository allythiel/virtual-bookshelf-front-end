import React from "react";
import SearchBar from "../searchBar/searchBar";
import Bookshelf from "../bookshelf/bookshelf";
import RelatedBooks from "../relatedBooks/relatedBooks";
import ActiveBook from "../activeBook/activeBook";

const Main = (props) => {
  return (
    <div className='search-bar'>
      <SearchBar handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} searchText={props.searchText} setSearchText={props.setSearchText}/>
    <div className='virtual-library'>
      <Bookshelf users={props.users} currentBook={props.currentBook} setCurrentBook={props.setCurrentBook} loggedInUser={props.loggedInUser} setLoggedInUser={props.setLoggedInUser} bookshelf={props.bookshelf} setBookshelf={props.setBookshelf} newBookshelf={props.newBookshelf} setNewBookshelf={props.setNewBookshelf} handleNewBookshelfAdd={props.handleNewBookshelfAdd} handleBookshelfChange={props.handleBookshelfChange} /> 
      <ActiveBook users={props.users} currentBook={props.currentBook} setCurrentBook={props.setCurrentBook} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} newComment = {props.newComment} setNewComment={props.setNewComment} comments={props.comments} setComments={props.setComments} commentCount={props.commentCount} setCommentCount={props.setCommentCount} />
      <RelatedBooks users={props.users} currentBook={props.currentBook} setCurrentBook={props.setCurrentBook} relatedBook={props.relatedBook} setRelatedBook={props.setRelatedBook} relatedBookId={props.relatedBookId} setRelatedBookId={props.setRelatedBookId}/>
    </div>
    </div>
  );
};

export default Main; 

 
         