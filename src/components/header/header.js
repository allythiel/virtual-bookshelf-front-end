import React from 'react'
import Banner from '../banner/banner';
import './header.css';

const Header = (props) => {
   return (
      <div className='header'>
         <Banner loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} handleLogin={props.handleLogin} loggedInUser={props.loggedInUser} setLoggedInUser={props.SetLoggedInUser} />
      </div>
   )
}

export default Header;

