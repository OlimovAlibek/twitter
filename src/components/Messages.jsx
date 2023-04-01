import React from 'react'
import "./messages.scss";
import settings from '../images/settings.png'
import messages from '../images/messages.png';


const Messages = () => {
  return (
    <div className='messages'>
    <div className='messagetop'>
      <h2>
      Messages
      </h2>
      <div>
      <img src={settings}></img>
      <img src={messages}></img>
      </div>
      </div>
      <h3>Welcome to your inbox!</h3>
      <p>Drop a line, share Tweets and more with private conversations between you and others on Twitter. </p>
      <button>Write a message</button>
    </div>
  )
}

export default Messages