import React from 'react';
import './activeBook.css'

const ActiveBook = (props) => {
    return (
        <div className='active-book'>
            <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
            {props.currentBook ? props.currentBook.volumeInfo ? <div><h3>{props.currentBook.volumeInfo.title} - {props.currentBook.volumeInfo.authors}</h3></div> : '' : '' }
            {props.currentBook ? props.currentBook.volumeInfo ? <div><h4>Average Rating: {props.currentBook.volumeInfo.averageRating} /5 </h4> </div> : '' : '' }
            {props.currentBook ? props.currentBook.volumeInfo ? <div><p>{props.currentBook.volumeInfo.description}</p> </div> : '' : '' }
        </div>
    )
}

export default ActiveBook
