import React from 'react';
import BannerActionBar from '../bannerActionBar/bannerActionBar';
import './banner.css';
import logo from '../../images/bookshelf-logo.png';

const Banner = (props) => {
   return (
      <div className='banner'>
         <div>
            <div><img src={logo} alt="" onClick={()=>{props.setLoggedInUser(props.loggedInUser)}} /></div>
            <div><h1>Virtual Bookshelf</h1></div>
         </div>
         <div>
            {(props.loggedIn && props.loggedInUser) && <BannerActionBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} handleLoginAvatarClick={props.handleLoginAvatarClick} loggedInUser={props.loggedInUser} /> }
         </div>
      </div>
   )
}

export default Banner;
