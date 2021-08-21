import React from 'react'

const ListBooks = (props) => {
    return (
        <div id='view-listed-books' onClick={() => { props.handleBookshelfClick(props.book)  }}>
        <div className='list-books'>
            <div>
            {props.bookshelf.map((book) => {
                return(<ul key={book._id}> <img src={book.volumeInfo1.imageLinks.smallThumbnail} alt=''/> {console.log('bookID Test', book.volumeInfo1)} </ul>)
            }) }
            </div>
        </div>
        </div>
    )
}

export default ListBooks