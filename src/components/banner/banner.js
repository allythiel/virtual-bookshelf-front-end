import React from 'react';
import './banner.css';
import logo from '../../images/bookshelf-logo.png';
import loginAvatar from '../../images/login-placeholder.png';

const Banner = (props) => {
   return (
      <div className='banner'>
         <div>
            <div><img src={logo} alt="" onClick={()=>{props.setLoggedInUser(props.loggedInUser)}} /></div>
            <div><h1>Virtual Bookshelf</h1></div>
         </div>
         <div>
      <div className="banner-action-bar">
         {/* <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}
         </div> */}
         <div className="login"><img onClick={props.handleLogin} src={loginAvatar}
            alt="" /></div>
         </div>            
         </div>
      </div>
   )
}

export default Banner;
