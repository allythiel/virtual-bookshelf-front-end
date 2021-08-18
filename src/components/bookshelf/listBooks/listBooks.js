import React from 'react'

const ListBooks = (props) => {
    return (
        <div className='list-comments'>
            <div>
            {props.bookshelf.map((book) => {
                return(<li key={book.volumeInfo.imageLinks.smallThumnail}> </li>)
            }) }
            </div>
        </div>
    )
}

export default ListBooks
