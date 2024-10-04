const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => { console.log('Connection to MongoDB established')},
        err => { console.log('Failed to connect to MongoDB')}
    );



app.listen(port, ()=>{
    console.log("Server is up")
})