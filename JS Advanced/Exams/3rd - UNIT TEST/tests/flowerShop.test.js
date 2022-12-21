const flowerShop = require("../flowerShop");
const assert = require("chai").assert;


describe('flowerShop',()=>{

    describe('calcPriceOfFlowers',()=>{
        it('The function returns the multiplies price and quantity',()=>{
            assert.equal(flowerShop.calcPriceOfFlowers('Rose',10,2),`You need $20.00 to buy Rose!`)
            assert.equal(flowerShop.calcPriceOfFlowers('Rose',0,0),`You need $0.00 to buy Rose!`)

        })
        it('should check if the input is valid', ()=>{
        assert.throws(() => flowerShop.calcPriceOfFlowers('aaa'), Error, "Invalid input!");
            
        })
    })
    describe('checkFlowersAvailable',()=>{
        it('should return the flower',()=>{
            assert.equal(flowerShop.checkFlowersAvailable('Rose',['Rose']),`The Rose are available!`)
            assert.equal(flowerShop.checkFlowersAvailable('Rose',['Roses']),`The Rose are sold! You need to purchase more!`)


        })
    })
    describe('sellFlowers',()=>{
        it('should check if input is valid', ()=>{
            assert.equal(flowerShop.sellFlowers(['Rose','Orchid'],0),`Orchid`)
            assert.equal(flowerShop.sellFlowers(['Rose','Orchid','Roses'],0),`Orchid / Roses`)
            assert.equal(flowerShop.sellFlowers(['Rose','Orchid','Roses'],1),`Rose / Roses`)

        })
        it('shoud check if input is invalid',()=>{
        assert.throws(() => flowerShop.sellFlowers(['Roses'],'Rose'), Error, "Invalid input!");
        assert.throws(() => flowerShop.sellFlowers(['Roses','Orchid','Roses'],3), Error, "Invalid input!");
            

        })
    })
})