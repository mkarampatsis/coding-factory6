const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
});

app.get('/about', (req, res) => {
    console.log("About Request");
    res.send("This is about page");
});

app.get('/login', (req, res) =>{
    console.log("Login Request XXXXXXX");
    res.send("This is login page");
})

app.get('/user', (req, res)=> {

    let query = req.query;
    console.log(query);

    let name = query.name;
    let surname = query.surname;
    let age = query.age;

    res.send("Name: " + name + " Surname: " + surname + " Age: " + age);
})

app.get('/details/:name/:surname/:age', (req, res) => {
    let params = req.params;
    console.log(params);

    let name = params.name;
    let surname = params.surname;
    let age = params.age;

    res.send("Name: " + name + " Surname: " + surname + " Age: " + age);
})


app.listen(port, () => {
    console.log("Server is up");
});