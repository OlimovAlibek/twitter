import { useState } from 'react'
import firebase from '../firebase';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import './login.scss';
import logo from '../../images/twitterlogo.png';



const Register = () => {

    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const  [confirmPassword, setConfirmPassword] = useState('');
    const  [error, setError] = useState('');

    const handleRegister = async (e) => {
      e.preventDefault();

      if (!email && !password && !confirmPassword) {
        setError('Please fill all fields');
        return;
      }
      if (password !== confirmPassword) {
        setError('Password do not match')
        return;
      }
      try {
       await firebase.auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message);
      }
    }

  return (
    <div className='register'>
        <img src={logo}></img>
        <h2>Register</h2>
            
            <form onSubmit={handleRegister}>
                <label>
                     <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                     <input placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <div className='error'>{error}</div>
                <button type="submit">Register</button>
                <span>Already have an account</span>
                <Link to='/login'>Login</Link>
            </form>
           
            
    </div>
  )
}

export default Register