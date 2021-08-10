import React from 'react';
import './listComments.css';
import CreateComment from '../createComment/createComment';

const ListComments = (props) => {
    return (
        <div className='list-comments'>
            {props.currentBook ? <CreateComment handleNewCommentChange={props.handleNewCommentChange} handleNewCommentSubmit={props.handleNewCommentSubmit} newComment = {props.newComment} setNewComment={props.setNewComment} comments={props.comments} setComments={props.setComments}/> : ''}
            <div>
            {/* {props.comments.map((comment, index) => {
                return(<li key={comment._id}>{comment.text}</li>) */}

            </div>
        </div>
    )
}

export default ListComments
