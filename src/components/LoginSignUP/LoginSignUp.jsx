import React, { useState } from 'react'
import './LoginSignUp.css'

const LoginSignUp = () => {

const[action,setAction] =useState("ATM Sign up")

  return (
    
    <div className="container">
        <div className="text">{action}</div>
        <div className="header">
            <div className="text">
                <div className="underline"></div>
            </div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:  <div className="input">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5LxZ1Ryqq8AiZh4oHaUvHesN5P4d_6tDhQ&usqp=CAU" alt="email" className='email-i' />
                <input type="email" placeholder='email' />
            </div> }
            <div className="input">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyfllPoOL63yDyA5Geve-R2WcmkS_5DSjNjbos7yHaFAoPIdIoZn4vyZ25OoeRq6BESs&usqp=CAU" alt="" className="user-i" />
                <input type='text' placeholder='username'  />
            </div>
          
            <div className="input">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQsyjOiBH87uNu3rrm83_T2hBvV97UT3hZQ&usqp=CAU" alt="" className="pass-i" />
                <input type="password" placeholder='password'  />
            </div>

        </div>
        <div className="submit-container">
            <div className={action ==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}> Sign Up</div>
            <div className={action === "ATM Sign up"?"submit gray":"submit"}onClick={()=>{setAction("ATM Sign up")}}> Login</div>
        </div>
    </div>

  )
}

export default LoginSignUp;