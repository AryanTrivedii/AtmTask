const mongoose = require("mongoose");
const dotenv= require('dotenv');
dotenv.config();
const url = process.env.DB_URL
console.log("Hello"+url);

const Connection=async()=>{
    try {
     await  mongoose.connect(url) 
       console.log("Database Connected Successfully")
    } catch (error) {
       console.log("Failure in Database Connection") 
    }
}


module.exports=Connection