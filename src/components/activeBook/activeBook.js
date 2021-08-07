import React from 'react';
import './activeBook.css'

const ActiveBook = (props) => {
    return (
        <div className='active-book'>
            <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
            {/* {props.currentBook ? <iframe id="bookviewer" title="activebook" width="600px" height="500px" src={`https://www.google.com/books/jsapi.js${props.currentBook.id.bookId}`}></iframe> : 'Loading . . .'} */}
            {props.currentBook ? props.currentBook.volumeInfo ? <div><h2>{props.currentBook.volumeInfo.title} - {props.currentBook.volumeInfo.authors}</h2></div> : '' : '' }
            {props.currentBook ? props.currentBook.volumeInfo ? <div><p>{props.currentBook.volumeInfo.description}</p> </div> : '' : '' }
            {props.currentBook ? props.currentBook.volumeInfo ? <div><h3>Average Rating: {props.currentBook.volumeInfo.averageRating} /5 </h3> </div> : '' : '' }
        </div>
    )
}

export default ActiveBook
