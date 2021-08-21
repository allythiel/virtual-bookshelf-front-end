import React from 'react';
import { ThumbDownAlt } from '@material-ui/icons';
import { ThumbUpAlt } from '@material-ui/icons';


const BookRatings = (props) => {
    console.log('bookRatings', props.currentBook)
    return (
        <div className='book-ratings'>
            <ThumbUpAlt />
            <ThumbDownAlt />
            
        </div>
    )
}

export default BookRatings
