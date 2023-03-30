
import logo from '../images/twitterlogo.png';
import './home.scss';
import home from '../images/home.png'
import explore from '../images/explore.png'
import notifications from '../images/notification.png'
import messages from '../images/messages.png'
import bookmarks from '../images/bookmarks.png'
import lists from '../images/lists.png'
import profile from '../images/profileoutline.png'
import more from '../images/more.png'
import { NavLink } from 'react-router-dom';








function ColorSchemesExample() {
  return (
    <>
      <div className='leftside' >
          <img src={logo} alt="twitter"></img>
          <NavLink className='text-link' to={'/'}>
 <div className='column'>
          <img src={home} alt="home"></img>
          <span>Home</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/explore'}>
 <div className='column'>
          <img src={explore} alt="home"></img>
          <span>Explore</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/notifications'}>
 <div className='column'>
          <img src={notifications} alt="home"></img>
          <span>Notifications</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/messages'}>
 <div className='column'>
          <img src={messages} alt="home"></img>
          <span>Messages</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/bookmarks'}>
 <div className='column'>
          <img src={bookmarks} alt="home"></img>
          <span>Bookmarks</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/lists'}>
 <div className='column'>
          <img src={lists} alt="home"></img>
          <span>Lists</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/profile'}>
 <div className='column'>
          <img src={profile} alt="home"></img>
          <span>Profile</span>
          </div></NavLink>
          <NavLink className='text-link' to={'/more'}>
 <div className='column'>
          <img src={more} alt="home"></img>
          <span>More</span>
          </div></NavLink>
          <button className='btn'>Tweet</button>
      </div>


    
    </>
  );
}

export default ColorSchemesExample;