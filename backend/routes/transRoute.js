const express = require("express");
const { withdraw, deposit, changepin, transactionHistory, incorrectPin, insuffecientFund } = require("../informationController/transaction");


const router = express.Router();

router.post('/withdraw',withdraw);
router.post('/deposit',deposit);
router.put('/uppin/:userId',changepin);
router.get('/history',transactionHistory);


module.exports = router