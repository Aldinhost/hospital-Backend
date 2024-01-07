require('dotenv').config();
const express = require('express');
const {connection} = require('./database/config');
const cors = require('cors');

//Server
const app = express();

//Database
connection();

// Cors
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.status(200).json({
        ok:true,
        msg: 'Test route'
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});