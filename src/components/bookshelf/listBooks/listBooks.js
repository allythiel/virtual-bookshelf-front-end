import React from 'react'

const ListBooks = (props) => {
    return (
        <div className='list-comments'>
            <div>
            {props.bookshelf.map((book) => {
                return(<li key={book._id}> <img src={book.volumeInfo1.imageLinks.smallThumbnail} alt=''/> {console.log('bookID Test', book.volumeInfo1)} </li>)
            }) }
            </div>
        </div>
    )
}

export default ListBooks