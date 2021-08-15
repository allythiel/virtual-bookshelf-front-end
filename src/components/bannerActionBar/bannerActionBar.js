import React from 'react';
import './bannerActionBar.css';
import logout from '../../images/logout.png'

const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}
         </div>

         <div className="login"><img onClick={props.handleLogin} src={logout}
            alt="" /></div>
      </div>
   )
}

export default BannerActionBar;