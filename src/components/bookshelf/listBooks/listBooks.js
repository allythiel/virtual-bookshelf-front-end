import React from 'react'

const ListBooks = (props) => {
    return (
        <div id='view-listed-books' onClick={() => { props.handleBookshelfClick(props.book)  }}>
        <div className='list-books'>
            <div>
            {props.bookshelf.map((book) => {
                return( <img src={book.volumeInfo1.imageLinks.smallThumbnail} alt=''/> )
            }) }
            </div>
        </div>
        </div>
    )
}

export default ListBooks