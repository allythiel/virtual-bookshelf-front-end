import React from 'react';
import './relatedBooks.css';

const RelatedBooks = (props) => {
    return (
        <div className="relatedbooks">
        <div> 
            <h2>Related Books</h2>
            <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <div className='book-info'> 
                {props.currentBook ? props.currentBook.volumeInfo ? <div><h3>{props.currentBook.volumeInfo.title} - {props.currentBook.volumeInfo.authors}</h3></div> : '' : '' }
        </div>
        </div>
    </div>
    )
}

export default RelatedBooks
