import React from "react";
import SearchBar from "../searchBar/searchBar";
import Bookshelf from "../bookshelf/bookshelf";
import RelatedBooks from "../relatedBooks/relatedBooks";
import ActiveBook from "../activeBook/activeBook";

const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <SearchBar handleSearchChange={props.handleSearchChange} handleSearchSubmit={props.handleSearchSubmit} searchText={props.searchText} setSearchText={props.setSearchText}/>
        </div>
        <div className='main'>
          <Bookshelf /> 
          <ActiveBook users={props.users} currentBook={props.currentBook} setCurrentBook={props.setCurrentBook} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} newComment = {props.newComment} setNewComment={props.setNewComment} comments={props.comments} setComments={props.setComments} currentUser={props.currentUser} setCurrentUser={props.SetCurrentUser}/>
          <RelatedBooks />
        </div>
      </div>
    </div>
  );
};

export default Main; 

 
         