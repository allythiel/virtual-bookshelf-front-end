import React from 'react';
import './bannerActionBar.css';
import loginAvatar from '../../images/login-placeholder.png';

const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}
         </div>

         <div className="login"><img onClick={props.handleLogin} src={loginAvatar}
            alt="" /></div>
      </div>
   )
}

export default BannerActionBar;