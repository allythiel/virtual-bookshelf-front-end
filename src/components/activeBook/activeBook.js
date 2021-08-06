import React from 'react';
import './activeBook.css'

const ActiveBook = (props) => {
    return (
        <div className='active-book'>
            {props.currentBook ? <iframe id="bookviewer" title="activebook" width="600px" height="500px" src={`https://www.google.com/books/jsapi.js${props.currentBook.id.bookId}`}></iframe> : 'Loading . . .'}
            {props.currentBook ? props.currentBook.volumeInfo ? <div><h2>{props.currentBook.volumeInfo.title}</h2> <h3>{props.currentBook.volumeInfo.averageRating}</h3></div> : '' : '' }
        </div>
    )
}

export default ActiveBook
