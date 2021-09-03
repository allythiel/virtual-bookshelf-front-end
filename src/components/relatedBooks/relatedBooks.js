import React from 'react';
import './relatedBooks.css';

const RelatedBooks = (props) => {
    return (
        <div className="related-books">
            <h1>Related Books</h1>
            <div className="related-book-one">
                <img src={props.relatedBook[1].volumeInfo.imageLinks.thumbnail} alt="" />
                {props.relatedBook ? props.relatedBook[1].volumeInfo ? <div><p>{props.relatedBook[1].volumeInfo.title} - {props.relatedBook[1].volumeInfo.authors}</p></div> : '' : '' } </div>
            <div className='related-book-two'>
                <img src={props.relatedBook[2].volumeInfo.imageLinks.thumbnail} alt="" />
                {props.relatedBook ? props.relatedBook[2].volumeInfo ? <div><p>{props.relatedBook[2].volumeInfo.title} - {props.relatedBook[2].volumeInfo.authors}</p></div> : '' : '' } </div>
            <div className='related-book-three'> 
            <img src={props.relatedBook[3].volumeInfo.imageLinks.thumbnail} alt="" />
                {props.relatedBook ? props.relatedBook[3].volumeInfo ? <div><p>{props.relatedBook[3].volumeInfo.title} - {props.relatedBook[3].volumeInfo.authors}</p></div> : '' : '' } </div>
            <div className='related-book-four'>
            <img src={props.relatedBook[4].volumeInfo.imageLinks.thumbnail} alt="" />
                {props.relatedBook ? props.relatedBook[4].volumeInfo ? <div><p>{props.relatedBook[4].volumeInfo.title} - {props.relatedBook[4].volumeInfo.authors}</p></div> : '' : '' } </div>
        </div>
    )
}

export default RelatedBooks
