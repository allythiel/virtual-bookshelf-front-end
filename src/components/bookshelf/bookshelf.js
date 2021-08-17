import React from 'react';
import './bookshelf.css'

const Bookshelf = (props) => {
    console.log('Add Book', props.bookshelf)

    return (
        <div className='bookshelf'>
                <h2>Bookshelf</h2>
                <h4> Total Books: {props.commentCount}  </h4>
        <div className="add-books">
            <button onClick={() => {props.handleNewAdd(props.bookshelf) }}> Add To Bookshelf</button>
                <div><img src={props.currentBook.volumeInfo.imageLinks.smallThumbnail} alt="" /></div>
            </div>
        </div>
    )
}

export default Bookshelf
