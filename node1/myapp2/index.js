const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/', express.static('files'));

const logger = (req, res, next) => {
    let url = req.url;
    let time = new Date();
    console.log('Received request from ' + url + ' at ' + time);
    next();
}

app.get('/public', logger, (req, res)=>{
    console.log("This is get request");
    res.send("Tthis is public request")
})

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(`Post request ${req.body.name}, ${req.body.surname}`);
})

app.post('/userForm', (req, res) => {
    console.log(req.body)
    res.send(req.body.firsname);
})

app.listen(port, () => {
    console.log("Server is up");
})