import React from 'react';
import './activeBook.css';
import CreateComment from '../comments/createComment/createComment';
import ListComments from '../comments/listComments/listComments';

const ActiveBook = (props) => {
    return (
        <div className='active-book'>
            <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <div className='book-info'> 
                {props.currentBook ? props.currentBook.volumeInfo ? <div><h3>{props.currentBook.volumeInfo.title} - {props.currentBook.volumeInfo.authors}</h3></div> : '' : '' }
                {props.currentBook ? props.currentBook.volumeInfo ? <div><h4>Average Rating: {props.currentBook.volumeInfo.averageRating} /5 </h4> </div> : '' : '' }
                {props.currentBook ? props.currentBook.volumeInfo ? <div><p>{props.currentBook.volumeInfo.description}</p> </div> : '' : '' }
        <div className='view-comments'>
            {props.currentBook ? <CreateComment users={props.users} handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} newComment = {props.newComment} setNewComment={props.setNewComment} comments={props.comments} setComments={props.setComments}/>  : ''}
            {props.currentBook ? <ListComments users={props.users} newComment={props.newComment} setNewComment={props.setNewComment} comments={props.comments} setComments={props.setComments} commentCount={props.commentCount} setCommentCount={props.setCommentCount} /> : '' }
        </div>
        </div>
        </div>
    )
}

export default ActiveBook
