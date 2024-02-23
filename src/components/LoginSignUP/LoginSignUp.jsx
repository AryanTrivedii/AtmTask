import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [action, setAction] = useState("ATM Sign up");
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error logging in:', error);
      
    }
  };

  const handleSignUpSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        email,
        username,
        password
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="container">
      <div className="text">{action}</div>
      <div className="header">
        <div className="text">
          <div className="underline"></div>
        </div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div className="input">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5LxZ1Ryqq8AiZh4oHaUvHesN5P4d_6tDhQ&usqp=CAU" alt="email" className='email-i' />
            <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        ) : (
          <div></div>
        )}
        <div className="input">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyfllPoOL63yDyA5Geve-R2WcmkS_5DSjNjbos7yHaFAoPIdIoZn4vyZ25OoeRq6BESs&usqp=CAU" alt="" className="user-i" />
          <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQsyjOiBH87uNu3rrm83_T2hBvV97UT3hZQ&usqp=CAU" alt="" className="pass-i" />
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="submit-container">
        
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSignUpSubmit}>Sign Up</div>
        <div className={action === "ATM Sign up" ? "submit gray" : "submit"} onClick={handleLoginSubmit}>Login</div>
      </div>
    </div>
  );
}

export default LoginSignUp;
