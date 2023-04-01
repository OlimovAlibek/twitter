import React from 'react'
import { auth } from '../firebase'
import { useState } from 'react'
import firebase from '../firebase'
import './login.scss'
import { Link } from 'react-router-dom'
import logo from '../../images/twitterlogo.png';





const Login = () => {


  const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [confirmPassword, setConfirmPassword] = useState('');
    const  [error, setError] = useState('');
    const  [showPassword, setShowPassword] = useState(false);


    const handleLogin = async(e) => {
      e.preventDefault();
      if (!email && !password ) {
        setError('Please fill all fields');
        return;
      }
      else {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
          if(error.code === 'auth/user-not-found') {
            setError('User not found')
          } else if(error.code === 'auth/wrong-password') {
            setError('Wrong password please try again')
          }
          else {
            setError(error.message)
          }
          
        }
      }
    }


    const toggleShowpswd = () => {
      setShowPassword(!showPassword)
    }

  return (
    <div className='login'>
      <img src={logo}></img>
      <h2 className=''>Login in to Twitter</h2>
      
      <form onSubmit={handleLogin}>
                <label>
                    <input placeholder='Email address' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                   <input placeholder='Password' type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div className='error'>{error}</div>
                <button onClick={toggleShowpswd}>{showPassword ? 'Hide' : 'Show Password'}</button>
                <button type="submit">Login</button>
                <Link className='link' to='/register'>Register</Link>

            </form>
    </div>
  )
}

export default Login