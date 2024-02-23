import React from 'react';
import axios from 'axios';
import './Screen.css';

const Screen = () => {
  
  const checkBalanceURL = "http://localhost:5000/api/balance/65d776c81bc2ec05f54711c5";
  const changePinURL = "http://localhost:5000/api/uppin/65d776c81bc2ec05f54711c5";
  const depositCashURL = "http://localhost:5000/api/deposit";
  const withdrawCashURL = "http://localhost:5000/api/withdraw";


  const handleButtonClick = async (url) => {
    try {

      const response = await axios.post(url, {

      });

      console.log(response.data);
    } catch (error) {

      console.error('Error:', error);
    }
  };

  return (
    

    <div className="wrapper" >
      


      <div className="section-one">
        <h1 className="par">Please Peform Transaction</h1>


        <button type="button" className="ddd" onClick={() => handleButtonClick(checkBalanceURL)}>Check Balance</button>
        <button type="button" className="ddd" onClick={() => handleButtonClick(changePinURL)}>Change Pin</button>
      </div>
      <div className="section-two">

        <button type="button" className="ddd" onClick={() => handleButtonClick(depositCashURL)}>Deposit Cash</button>
        <button type="button" className="ddd" onClick={() => handleButtonClick(withdrawCashURL)}>Withdraw Cash</button>
      </div>
    </div>

  );
}

export default Screen;
