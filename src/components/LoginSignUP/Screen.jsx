import React from 'react'
import './Screen.css';

const Screen = () => {
  return (
    <div className='cent'>
    <div className="wrapper" >
        <div className="section-one">
        <button type="submit">Check Balance</button>
        <button type="submit">Change Pin</button>
        <button type="submit">Previous Screen</button>
        </div>
        <div className="section-two" >
        <button type="submit">Deposit Cash</button>
        <button type="submit">Withdraw Cash</button>
        

        </div>


    </div>
    </div>
  )
}

export default Screen