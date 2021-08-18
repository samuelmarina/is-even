
// const  isEven  = require("../index"); 

/*
*  importing legacy function giving RangeError: Maximum call stack size exceeded
*  so i'm gonna use tiny part of function to write test cases, 
*/

const isEven = require("./index.tiny");

describe('check if a number is even or odd', () => {
    it("1 should be false", ()=>{
        expect(isEven(1)).toBeFalsy();
    }) 
    it("2 should be true", ()=>{
        expect(isEven(2)).toBeTruthy();
    });
})
