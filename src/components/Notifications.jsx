import React from 'react'
import './notifications.scss';
import settings from '../images/settings.png'
import logo from '../images/twitterlogo.png';


const Notifications = () => {
  return (
    <div className='notifications'>
    <div className='top'>
      <h1>Notifications</h1>
      <img src={settings}></img>
      </div>
      <div className='buttons'>
        <button>All</button>
        <button>Verified</button>
        <button>Mentions</button>
      </div>
      <div className='below'>
      <img src={logo}></img>
      <p>There was a login to your account @olimovalibek from a new device on Apr 01, 2023. Review it now.</p>
      </div>
    </div>
  )
}

export default Notifications;