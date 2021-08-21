import React from 'react';
import { ThumbDownAlt } from '@material-ui/icons';
import { ThumbUpAlt } from '@material-ui/icons';


const BookRatings = (props) => {
    console.log('bookRatings', props.currentBook)
    return (
        <div className='book-ratings'>
            <button onClick={() => {props.handleLike}}><ThumbUpAlt /></button>
            <button onClick={() => {props.handleDislike}}><ThumbDownAlt /></button>
            
        </div>
    )
}

export default BookRatings
