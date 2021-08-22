import React from 'react';
import './listComments.css';

const ListComments = (props) => {
    return (
        <div className='list-comment'>
            <h3> Total Reviews: {props.commentCount} </h3>
            <div>
            {props.comments.map((comment) => {
                return(<li key={comment._id}>{comment.author} : {comment.text} </li>)
            }) }
            </div>
        </div>
    )
}


export default ListComments
