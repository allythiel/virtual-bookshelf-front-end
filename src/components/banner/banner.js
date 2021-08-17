import React from 'react';
import './banner.css';
import logo from '../../images/bookshelf-logo.png';
import BannerActionBar from '../bannerActionBar/bannerActionBar';

const Banner = (props) => {
   return (
      <div className='banner'>
         <div>
            <div><img src={logo} alt="" onClick={()=>{props.setLoggedInUser(props.loggedInUser)}} /></div>
            <div><h1>Virtual Bookshelf</h1></div>
         </div>
         <div>
      <div className="banner-action-bar">
      {(props.loggedIn && props.loggedInUser) && <BannerActionBar loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} handleLogin={props.handleLogin} loggedInUser={props.loggedInUser} /> }
         </div>            
         </div>
      </div>
   )
}

export default Banner;
