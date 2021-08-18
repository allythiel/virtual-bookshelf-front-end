import React from 'react';
import './bookshelf.css'

const Bookshelf = (props) => {

    return (
        <div className='bookshelf'>
                <h2>Bookshelf</h2>
                <h4> Total Books: {props.bookshelfCount}  </h4>
        <div className="add-books">
            <button onClick={(event) => {
                props.handleNewAdd(event) 
                }
            }>
                <button type='button' name='bookshelf'
                onChange={props.handleNewAddChange}
                value={props.bookshelf}>

                </button>
                 Add To Bookshelf</button>

        </div>
        </div>
    )
}

export default Bookshelf
