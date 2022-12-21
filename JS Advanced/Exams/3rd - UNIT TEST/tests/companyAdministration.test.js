const companyAdministration = require("../companyAdministration");
const assert = require("chai").assert;



describe('companyAdministration',()=>{

    describe('hiringEmployee',()=>{
        it('should check if the position is programmer',()=>{
            assert.equal(companyAdministration.hiringEmployee('Ivan','Programmer','1'),`Ivan is not approved for this position.`)
        })
        it('should check if the position is programmer',()=>{
            assert.throws(() => companyAdministration.hiringEmployee('Ivan','Worker','1'), Error, `We are not looking for workers for this position.`);
        })
        it('should check if the programmer has 3 or more years experience',()=>{
            assert.equal(companyAdministration.hiringEmployee('Ivan','Programmer','3'),`Ivan was successfully hired for the position Programmer.`)
            assert.equal(companyAdministration.hiringEmployee('Ivan','Programmer','4'),`Ivan was successfully hired for the position Programmer.`)
            
        })
    })
    describe('calculateSalary',()=>{
        it('should check if the input is a number',()=>{
            assert.throws(() => companyAdministration.calculateSalary('10'), Error, `Invalid hours`);
            assert.throws(() => companyAdministration.calculateSalary(-10), Error, `Invalid hours`);

        })
        it('should return sum if the input is a number',()=>{
            assert.equal(companyAdministration.calculateSalary(1),15)
            assert.equal(companyAdministration.calculateSalary(2),30)
            assert.equal(companyAdministration.calculateSalary(0),0)


        })
        it('should check if the worker has more than 160 working hours',()=>{
            assert.equal(companyAdministration.calculateSalary(160),2400)
            assert.equal(companyAdministration.calculateSalary(161),3415)

        })
    })
    describe('firedEmployee',()=>{
        it('should remove employee from array',()=>{
            assert.equal(companyAdministration.firedEmployee(['Ivan','Petar'],1),'Ivan')
            assert.equal(companyAdministration.firedEmployee(['Ivan','Petar','Georgi'],1),'Ivan, Georgi')
            assert.equal(companyAdministration.firedEmployee(['Ivan','Petar','Georgi','Ivan'],1),'Ivan, Georgi, Ivan')

        })
        it('should check if the input is valid',()=>{
            assert.throws(() => companyAdministration.firedEmployee(['Ivan'],1), Error, `Invalid input`)
            assert.throws(() => companyAdministration.firedEmployee(['Ivan'],'Ivan'), Error, `Invalid input`)
            assert.throws(() => companyAdministration.firedEmployee(10,1), Error, `Invalid input`)
            assert.throws(() => companyAdministration.firedEmployee(['Ivan'],-1), Error, `Invalid input`)
            assert.throws(() => companyAdministration.firedEmployee([],0), Error, `Invalid input`)


        })
    })
})
