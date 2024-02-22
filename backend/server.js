const express = require('express');
const app = express();
const port = 5000;

const connectDatabase = require('./config/database');
const info = require('./routes/informationRoute');
const transac = require('./routes/transRoute');


connectDatabase();
 app.use(express.json())

app.use('/api', info);
app.use('/api',transac);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
