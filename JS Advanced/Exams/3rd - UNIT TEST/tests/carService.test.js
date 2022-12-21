const carService = require("../03. Car service");
const assert = require("chai").assert;

describe('carService',()=>{
    describe('isItExpensive',()=>{
        it('should check if the parameter is equal to Engine or Transmission',()=>{
            assert.equal(carService.isItExpensive('Engine'),`The issue with the car is more severe and it will cost more money`)
            assert.equal(carService.isItExpensive('Transmission'),`The issue with the car is more severe and it will cost more money`)
        })
        it('should check if the above conditions are not met',()=>{
            assert.equal(carService.isItExpensive('Tires'),`The overall price will be a bit cheaper`)
        })
    })
    describe('discount',()=>{
       it('should check if the numberOfParts is smaller or equal to 2',()=>{
        assert.equal(carService.discount(1,10),"You cannot apply a discount")
        assert.equal(carService.discount(2,10),"You cannot apply a discount")

       })
       it('should calculate the discount',()=>{
        assert.equal(carService.discount(4,30),`Discount applied! You saved 4.5$`)
       })
       it('should validete the input',()=>{
        assert.throws(() => carService.discount('10',100), Error, `Invalid input`);
        assert.throws(() => carService.discount(10,'10'), Error, `Invalid input`);
        assert.throws(() => carService.discount(`10`,'10'), Error, `Invalid input`);
       })
    })
    describe('partsToBuy',()=>{
        it('should return the sum',()=>{
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 },{ part: "coil springs", price: 230 }],["blowoff valve", "injectors"]),145)
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 },{ part: "coil springs", price: 230 }],["blowoff valve", "coil springs"]),375)
        })
        it('should check if partsCatalog is empty',()=>{
            assert.equal(carService.partsToBuy([],["blowoff valve", "injectors"]),0)
        })
        it('should check for invalid inputs',()=>{
            assert.throws(() => carService.partsToBuy(`10`,['tires']), Error, `Invalid input`);
            assert.throws(() => carService.partsToBuy({ part: "blowoff valve", price: 145 },10), Error, `Invalid input`);

        })
    })
})