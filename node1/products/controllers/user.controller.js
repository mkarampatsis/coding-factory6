const User = require('../models/user.model')
// const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
    console.log("Find all users");

    try {
        const result = await User.find()
        // logger.debug('success in reading all users');
        // logger.error("Error in reading all users");
        res.json({ status: true, data: result })
    } catch(err){
        res.json({ status:false, data: err })
    }
}

exports.findOne = async(req, res) => {
    const username = req.params.username;
    console.log("Find user with username ", username);

    try {
        const result = await User.findOne({username: username});
        res.json({status:true, data: result});
    } catch(err) {
        res.json({status: false, data: err});
    }
}

exports.create = async(req, res) => {
    const newUser = new User ({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address:{
            area: req.body.area,
            road: req.body.road
        }
    });

    console.log("Insert user with username", req.body.username);

    try {
        const result = await newUser.save();
        res.json({ status:true, data: result});
    } catch (err) {
        res.json({status: false, data: err})
    }
}

exports.update = async(req, res) => {
    const username = req.params.username;
    console.log("Update user with username ", username);

    const updateUser = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: {
            area: req.body.address.area,
            road: req.body.address.road
        }
    };

    try {
        const result = await User.findOneAndUpdate(
            {username: username},
            updateUser, 
            { new: true }
        )
        res.json({status: true, data: result});
    } catch (err) {
        res.json({status: false, data: err})
    }
}

exports.delete = async(req, res) =>{
    const username = req.params.username;

    console.log("Delete user with username", username);

    try {
        const result = await User.findOneAndDelete({username: username})
        res.json({ status: true, data: result});
    } catch (err) {
        res.json({ status: false, data: result});
    }
}