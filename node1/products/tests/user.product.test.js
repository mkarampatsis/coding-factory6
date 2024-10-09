const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../index');

const helpers = require('../services/user.service')

beforeEach(async ()=> {
    await mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => { console.log("Connection to MongoDB for Jest established")},
        err => { console.log('Failed to connect to MongoDB ', err) }
    )
});

afterEach(async ()=> {
    await mongoose.connection.close()
});

describe("Tests for /api/user-product/users/products requests", () => {
    it("GET for /api/user-product/uesrs/products", async()=>{
        const res = await request(app)
            .get('/api/user-product/users/products')
        
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
        expect(res.body.data.length).toBeGreaterThan(0);
    });
});

describe("Tests for /api/user-product/{username}/products requests", () => {

    it("GET for /api/user-product/{username}/products", async()=>{
        const res = await request(app)
            .get('/api/user-product/user3/products')
        
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBeTruthy();
        expect(res.body.data.username).toBe('user3');
        expect(res.body.data.products.length).toBeGreaterThan(0)
    })

    it("POST for /api/user-product/{username}/products", async() =>{
        const result = await helpers.findLastInsertedUser()
        const username = result.username;
        // console.log(username);
        const res = await request(app)
            .post('/api/user-product/'+ username + '/products')
            .send({
                username:username,
                products: [{
                    product:"new product",
                    quantity:20,
                    cost: 10
                }]
            })

        expect(res.statusCode).toBe(200);
        expect(res.body.data).toBeTruthy();
    })
});

describe("Test for /api/user-product/{username}/products/{id}", () =>{
    it("PATCH for /api/user-product/{username}/products/{id}", async()=>{
        let result = await helpers.findLastInsertedUser()
        const username = result.username
        // const result = await helpers.findUsersProduct('user3', "6706a68541695504ff534811")
        const product = await helpers.findUsersProduct(username)
        // username = result.username;
        // id = result.products[0]._id;
        id = product.products[0]._id;
        const res = await request(app)
            .patch('/api/user-product/'+ username + '/products/' + id)
            .send({
                username: result.username,
                product:{
                    quantity:180
                }
            })
        result =  await helpers.findLastInsertedUser()
        // console.log(result);
        expect(res.statusCode).toBe(200);
        expect(result.products[0].quantity).toBe(180);
    })

})
