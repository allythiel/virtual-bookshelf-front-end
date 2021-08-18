import React from 'react';
import './bookshelf.css';
import ListBooks from './listBooks/listBooks';

const Bookshelf = (props) => {

    return (
        <div className='bookshelf'>
                <h2>Bookshelf</h2>
                <h4> Total Books: {props.bookshelf.length}  </h4>
        <div className="add-books">
            <form onClick={(event) => {
                props.handleNewAdd(event)
                }
            }>
                <button type='button' name='bookshelf'
                onChange={props.handleNewAddChange}
                value={props.newBookshelf}>

                 Add To Bookshelf</button></form>

        </div>
        </div>
    )
}

export default Bookshelf
