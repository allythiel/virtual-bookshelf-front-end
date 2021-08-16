import React from 'react';
import './bookshelf.css'

const Bookshelf = (props) => {
    console.log('Add Book', props.bookshelf)
    return (
        <div className='bookshelf'>
            <div>
                <h2>Bookshelf</h2> <button onClick={() => {props.handleNewBookshelfAdd(props.bookshelf, props.index) }}> Add To Bookshelf</button>
                <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
            </div>
        <div className="add-books">
            {/* <button onClick={() => {props.handleNewBookshelfAdd(props.bookshelf[props.index], props.index) }}> Add </button> */}
        </div>
        </div>
    )
}

export default Bookshelf
