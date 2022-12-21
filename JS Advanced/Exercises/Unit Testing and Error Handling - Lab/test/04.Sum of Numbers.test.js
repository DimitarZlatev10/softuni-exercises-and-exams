const assert = require('chai').assert
const sum = require('../04. Sum of Numbers')
it('Should add positive numbers', ()=>{

    let input = [1,2,3,4,6]
    let expectedResult = 15

    let actualResult = sum(input)

    if(expectedResult ===actualResult){
        console.log('Passing');
    }else{
        throw new Error('sum should be 15')
    }
})