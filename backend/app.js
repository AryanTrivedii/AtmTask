const express = require('express');

const app = express();

app.use(express.json());

const information = require("../backend/routes/informationRoute");
const transac = require("../backend/routes/transRoute")



app.use("/",information);
app.use("/",transac);


module.exports = app