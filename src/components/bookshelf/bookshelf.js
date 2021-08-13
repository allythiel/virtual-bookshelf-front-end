import React from 'react';
import './bookshelf.css'

const Bookshelf = (props) => {
    return (
        <div className="bookshelf">
            <div> 
                <h2>Bookshelf</h2>
                <div><img src={props.currentBook.volumeInfo.imageLinks.thumbnail} alt="" /></div>
            </div>

        </div>
    )
}

export default Bookshelf
