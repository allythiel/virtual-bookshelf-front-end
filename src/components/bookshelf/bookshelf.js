import React from 'react';
import './bookshelf.css';
import ListBooks from './listBooks/listBooks';

const Bookshelf = (props) => {

    return (
        <div className='bookshelf'>
                <h1>Bookshelf</h1>
                <h4> Total Books: {props.bookshelf.length}  </h4>
        <div className="add-books">
            <form onClick={(event) => {
                props.handleNewAdd(event)
                }
            }>
                <button type='button' name='bookshelf'
                onChange={props.handleNewAddChange}
                value={props.newBookshelf}>

                 Add To Bookshelf</button></form></div>
        <div className='list-books'>
            <ListBooks users={props.users} currentBook={props.currentBook} setCurrentBook={props.setCurrentBook} loggedInUser={props.loggedInUser} setLoggedInUser={props.setLoggedInUser} newBookshelf={props.newBookshelf} setNewBookshelf={props.setNewBookshelf}  bookshelfCount={props.bookshelfCount} setBookshelfCount={props.setBookshelfCount} bookshelf={props.bookshelf} setBookshelf={props.setBookshelf} handleNewAdd={props.handleNewAdd} handleNewAddChange={props.handleNewAddChange} handleBookshelfClick={props.handleBookshelfClick}/>
        </div>
        </div>
    )
}

export default Bookshelf
