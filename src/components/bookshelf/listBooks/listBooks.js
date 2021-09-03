import React from 'react'

const ListBooks = (props) => {
    return (
        <div className='list-books'>
            <div onClick={(event) => {
                props.handleClick(event)
            }
        }>
            <div onChange={props.handleClickChange}
            value={props.currentBook}>
            <div>
            {props.bookshelf.map((book) => {
                return( <img src={book.volumeInfo1.imageLinks.smallThumbnail} alt=''/> )
            }) }
            </div>
            </div>
        </div>
        </div>
    )
}

export default ListBooks