import React from 'react';
import './listComments.css';

const ListComments = (props) => {
    return (
        <div className='list-comments'>
            <h2> {props.commentCount} Reviews </h2>
            <div>
            {props.comments.map((comment) => {
                return(<li key={comment._id}>{comment.text} </li>)
            }) }
            </div>
        </div>
    )
}


export default ListComments
