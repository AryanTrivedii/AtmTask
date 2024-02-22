const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true

    },
   accountnumber: {
        type: Number,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Users = mongoose.model("User",userSchema)

module.exports = Users;
  
