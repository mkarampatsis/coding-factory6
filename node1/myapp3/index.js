const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/create', (req, res) => {
    res.render('form', {});
})

app.post('/user', (req,res) => {
    let firstname = req.body.firstname;
    let surname = req.body.surname;
    let email = req.body.email;
    let sex = req.body.sex;
   
    console.log(firstname, surname);
    res.render('user', {
        name: firstname,
        surname: surname,
        email: email,
        sex: sex
    })    
})

app.listen(port, () => {
    console.log("Server is up");
})