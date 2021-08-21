import React from 'react';
import './relatedBooks.css';

const RelatedBooks = (props) => {
    return (
        <div className="relatedbooks">
        <div> 
            <h1>Related Books</h1>
            <div>
                <img src={props.relatedBook[1].volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <div className='book-info'> 
                {props.relatedBook ? props.relatedBook[1].volumeInfo ? <div><p>{props.relatedBook[1].volumeInfo.title} - {props.relatedBook[1].volumeInfo.authors}</p></div> : '' : '' }
            <div>
            <img src={props.relatedBook[2].volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <div className='book-info'> 
                {props.relatedBook ? props.relatedBook[2].volumeInfo ? <div><p>{props.relatedBook[2].volumeInfo.title} - {props.relatedBook[2].volumeInfo.authors}</p></div> : '' : '' }
            </div>
            <div>
            <img src={props.relatedBook[3].volumeInfo.imageLinks.thumbnail} alt="" /></div>
                <div className='book-info'> 
                {props.relatedBook ? props.relatedBook[3].volumeInfo ? <div><p>{props.relatedBook[3].volumeInfo.title} - {props.relatedBook[3].volumeInfo.authors}</p></div> : '' : '' }
            </div>
            </div>
        </div>
        </div>
    )
}

export default RelatedBooks
