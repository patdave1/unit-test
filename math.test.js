const  {divide,subtract,sum,multiply}= require("./math")

//used to check for expectation
describe("Math",()=>{
    it("should sum 2+2 be 4" , ()=>{
        const result =sum(2,2);
        expect(result).toBe(4)
    })
    
    it("should multiply 3 * 3 to result 9", ()=>{
        const result = multiply(3,3);
        expect(result).toBe(9)
    })
    
    it("should divide 10/2 be 5" , ()=>{
     const result = divide(6,2);
     expect(result).toBe(3);
    })
    
    it("should subtract 10-2 be 8" , ()=>{
        const result = subtract(10,2);
        expect(result).toBe(8);
    })
    
})


it("should be falsy",()=>{
    expect(undefined).toBeFalsy();
})

test("Array", ()=>{
    let days =["Monday","Tuesday","Wednwssday"];
    expect(days).toContain('Tuesday');
    expect(days).not.toContain('friday');

})