import Home from '../src/components/home'
import './App.css';
import Searchside from './components/Searchside';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Explore from './components/Explore';
import HomeSection from './components/HomeSection';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists';
import Profile from './components/Profile';
import More from './components/More';


function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/' element={<HomeSection />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/notifications' element={<Notifications/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/bookmarks' element={<Bookmarks/>} />
        <Route path='/lists' element={<Lists/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/more' element={<More/>} />
      </Routes>
      <Searchside />

    </BrowserRouter>

  );
}

export default App;
 