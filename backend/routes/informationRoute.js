const express = require('express');
//const app = express();
const { getAllDetails, checkBalance, login, register } = require('../informationController/informationController');


const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.get("/Information",getAllDetails);
router.get('/balance/:userID',checkBalance);



module.exports = router