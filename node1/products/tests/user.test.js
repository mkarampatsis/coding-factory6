const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../index');

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(
            () => {console.log("Connetion to Mongo from Jest established")},
            err => {console.log("Failed to connect to Mongo from Jest")}
        )
})

afterEach(async () => {
    await mongoose.connection.close()
})
describe("For /api/users requests", () =>{

})

describe("For /api/user/{username} requests", () => {
    
})
