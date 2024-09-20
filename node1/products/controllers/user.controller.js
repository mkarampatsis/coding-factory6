const User = require('../models/user.model')

exports.findAll = async(req, res) => {
    console.log("Find all users");

    try {
        const result = await User.find()
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
