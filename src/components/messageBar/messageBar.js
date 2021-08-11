import React from 'react';
import './messageBar.css'

const MessageBar = (props) => {
   return (
      <div className='message-bar'>
         <div className='message-text'>{props.messageText}</div><div className='cancel-icon' onClick={props.handleCloseMessageBar}></div>
      </div>
   )
}

export default MessageBar;
