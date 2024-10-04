const mongoose = require("mongoose");
const request = require("supertest");
const app = require('../index');

const helpers = require('../services/user.service')

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI)
        .then(
            () => {console.log("Connetion to Mongo from Jest established")},
            err => {console.log("Failed to connect to Mongo from Jest")}
        )
})

afterEach(async () => {
    await mongoose.connection.close()
})
describe("Tests for /api/users requests", () =>{
    it("GET /api/users", async() => {
        const res = await request(app).get("/api/users")
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
        expect(res.body.data.length).toBeGreaterThan(0)
    }, 10000);

    it("POST /api/users request", async() => {
        const res = await request(app).post("/api/users")
            .send({
                username: "test4",
                password:"12345",
                name: "test4 name",
                surname: "test4 surname",
                email:"test4@aueb.gr",
                address: {
                    area: "area66",
                    road: "road66"
                }
            });
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
        expect(res.body.data).toBeTruthy();
    })
})

describe("Tests for /api/user/{username} requests", () => {
    it("GET /api/users/{username}", async() =>{
        const result = await helpers.findLastInsertedUser();
        const res = await request(app).get('/api/users/' + result.username);

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
        expect(res.body.data.username).toBe(result.username);
        expect(res.body.data.email).toBe(result.email);
    })

    it("DELETE /api/users/{username}", async()=>{
        const result = await helpers.findLastInsertedUser();
        const res = await request(app).delete('/api/users/'+ result.username);

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
    })
})
