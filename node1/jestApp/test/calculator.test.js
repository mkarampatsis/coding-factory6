const mathOperations = require('../index');

describe("Calculator Tests", ()=>{
    test("Addition 2 numbers", () => {
        let result = mathOperations.sum(1, 2);

        expect(result).toBe(3);
    });

    test("Multiplication of 2 numbers", ()=>{
        let result = mathOperations.mult(2,8);

        expect(result).toBe(16);
    })

    test("Division of 2 numbers", ()=>{
        let result = mathOperations.divide(24, 8);

        expect(result).toBe(3);
    })
})

// describe("Test only sums", ()=>{

// })

describe("Test only diffs", ()=>{
    test("Subtraction of 2 numbers", ()=>{
        let result = mathOperations.diff(10, 2);
        
        // expect(result).toBe(8)
        expect(result).toBe(10);
    })
})

