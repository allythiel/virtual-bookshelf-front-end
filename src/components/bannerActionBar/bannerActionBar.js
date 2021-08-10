import React from 'react';
import './bannerActionBar.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import loginAvatar from '../../images/login-placeholder.png';

const BannerActionBar = (props) => {
   return (
      <div className="banner-action-bar">
         <div className="user-info">Hi, {props.loggedInUser.name.split(' ')[0]}
         <div className='request-text'>Friend Request</div>
            {props.loggedInUser.email !== props.currentUser.email && <div><AddCircleOutlineIcon /></div>}
         </div>

         <div className="login"><img onClick={props.handleLoginAvatarClick} src={loginAvatar}
            alt="" /></div>
      </div>
   )
}

export default BannerActionBar;