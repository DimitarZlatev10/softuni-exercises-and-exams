const rentCar = require("../rentCar");
const assert = require("chai").assert;

describe('rentCar testing',()=>{
 
 describe('searchCar', ()=>{
     it('should work with right arguments',()=>{
         assert.equal(rentCar.searchCar(['BMW','Audi','Mazda'],'BMW'),`There is 1 car of model BMW in the catalog!`)
     })
     it('should throw error with invalid arguments',()=>{
        assert.throws(() => rentCar.searchCar(['BMW'],15), Error, "Invalid input!");
        assert.throws(() => rentCar.searchCar('BMW','BMW'), Error, "Invalid input!");

     })
     it('should throw error if no match',()=>{
        assert.throws(() => rentCar.searchCar(['BMW','Audi'],'Mazda'), Error, 'There are no such models in the catalog!');
         
     })
 })
 describe('calculatePriceOfCar',()=>{
     it('should work with right arguments',()=>{
         assert.equal(rentCar.calculatePriceOfCar('Volkswagen',2),`You choose Volkswagen and it will cost $40!`)
     })
     it('should throw error with invalid arguments',()=>{
        assert.throws(() => rentCar.calculatePriceOfCar('Volkswagen','AA'), Error, "Invalid input!");

     })
     it('should throw error with invalid car name',()=>{
        assert.throws(() => rentCar.calculatePriceOfCar('Mazda',2), Error, "No such model in the catalog");

     })
 })
 describe('checkBudget',()=>{
     it('should throw error with invalid inputs',()=>{
        assert.throws(() => rentCar.checkBudget('a','a','a'), Error, "Invalid input!");
     })
     it('should throw return that you need bigget budget',()=>{
       assert.equal(rentCar.checkBudget(10,2,10),`You need a bigger budget!`)

     })
     it('should throw return that have rent a car',()=>{
        assert.equal(rentCar.checkBudget(10,2,30),`You rent a car!`)
        assert.equal(rentCar.checkBudget(10,2,20),`You rent a car!`)

      })
 })
})