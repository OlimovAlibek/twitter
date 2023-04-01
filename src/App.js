import Home from '../src/components/home'
import './App.css';
import Searchside from './components/Searchside';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Explore from './components/Explore';
import HomeSection from './components/HomeSection';
import Notifications from './components/Notifications';
import Messages from './components/Messages';
import Bookmarks from './components/Bookmarks';
import Lists from './components/Lists';
import Profile from './components/Profile';
import More from './components/More';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { auth } from './components/firebase';
import { useEffect, useState } from 'react';



function App() {

  const  [user, setUser] = useState(null);

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
    return unsubscribe;
  }, []) 


  return (

    
    
     <BrowserRouter>
      <Home />
      <Routes>
        <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>


        <Route path='/' element={user ? <HomeSection user={user}/> : <Navigate to='/login'/>} />

        <Route path='/' element={user ? <HomeSection/> : <Navigate to='/login' /> } />
        <Route path='/' element={<HomeSection/>}/>

        <Route path='/explore' element={user ? <Explore/> : <Navigate to='/login' /> } />
        <Route path='/explore' element={<Explore/>}/>

        <Route path='/notifications' element={user ? <Notifications/> : <Navigate to='/login' /> } />
        <Route path='/notifications' element={<Notifications/>} />

        <Route path='/messages' element={user ? <Messages/> : <Navigate to='/login' /> } />
        <Route path='/messages' element={<Messages/>} />

        <Route path='/bookmarks' element={user ? <Bookmarks/> : <Navigate to='/login' /> } />
        <Route path='/bookmarks' element={<Bookmarks/>} />

        <Route path='/lists' element={user ? <Lists/> : <Navigate to='/login' /> } />
        <Route path='/lists' element={<Lists/>} />

        <Route path='/profile' element={user ? <Profile/> : <Navigate to='/login' /> } />
        <Route path='/profile' element={<Profile/>} />

        <Route path='/more' element={user ? <More/> : <Navigate to='/login' /> } />
        <Route path='/more' element={<More/>} />
      </Routes>
        
      <Searchside /> 
      
      
    </BrowserRouter> 

  );
}

export default App;
