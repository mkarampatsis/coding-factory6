const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let addresSchema = new Schema({
    area: { type: String },
    road: { type: String }
}, {_id: false })

let phoneSchema = new Schema({
    type: { type: String },
    number: { type: String }
}, {_id: false})

let productSchema = new Schema({
    product: { type: String },
    cost: { type: Number },
    quantity: { type: Number, required: true },
    date: { type: Date, default: Date.now}
})

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true
    },
    passord: {
        type: String,
        required: [true, 'Password is required field'],
        max: 100
    },
    name: {
        type: String,
        required: [true, 'Name is required field'],
        max: 100,
    },
    surname: {
        type: String,
        required: [true, 'Surname is required field'],
        max: 100
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        max: 100,
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email address is not valid",
        ],
    },
    address: addresSchema,
    phone: { type: [phoneSchema], null: true },
    products: { type: [productSchema], null: true}
},
{
    collection: 'users',
    timestamps: true
});

module.exports = mongoose.model('User', userSchema)