const numberOperations = require("../03. Number Operations_Resources");
const assert = require("chai").assert;

describe("powNumber", () => {
  it("should return num * num", () => {
    assert.equal(numberOperations.powNumber(2, 2), 4);
    assert.equal(numberOperations.powNumber(-2, 2), 4);
    assert.equal(numberOperations.powNumber(0, 2), 0);
    assert.equal(numberOperations.powNumber(-2, -2), 4);
    assert.equal(numberOperations.powNumber(1.5,1.5), 2.25);

  });
  describe("numberChecker", () => {
    it("should check if the input is a number", () => {
      assert.equal(numberOperations.numberChecker(50),`The number is lower than 100!`);
      assert.equal(numberOperations.numberChecker(150),`The number is greater or equal to 100!`);
      assert.equal(numberOperations.numberChecker('150'),`The number is greater or equal to 100!`);
      assert.equal(numberOperations.numberChecker('100'),`The number is greater or equal to 100!`);
      assert.equal(numberOperations.numberChecker('-50'),`The number is lower than 100!`);
      



    });
    it('should check if the input is not a number',()=>{
        assert.throws(() => numberOperations.numberChecker('aaa'), Error, "The input is not a number!");
        assert.throws(() => numberOperations.numberChecker(['a']), Error, "The input is not a number!");
    })
  });
  describe('sumArrays',()=>{
      it('should return the sum of the arrays',()=>{
          assert.equal(numberOperations.sumArrays([1],[1]),2)
          assert.deepEqual(numberOperations.sumArrays([1,2],[1,2]),[2,4])
          assert.deepEqual(numberOperations.sumArrays([1,2],[1]),[2,2])
          assert.deepEqual(numberOperations.sumArrays([0,2],[1,2]),[1,4])
          assert.deepEqual(numberOperations.sumArrays([-2,-2],[-2,-2]),[-4,-4])
          assert.deepEqual(numberOperations.sumArrays([2,-2],[2,-2]),[4,-4])
          assert.deepEqual(numberOperations.sumArrays([2,2,2],[2,2,2]),[4,4,4])
          assert.deepEqual(numberOperations.sumArrays([2.5,2.75,2.2],[2.5,2.75,2.2]),[5,5.50,4.4])
          assert.deepEqual(numberOperations.sumArrays([-1.5,-2.75],[-1.5,-2.75]),[-3,-5.50])

  })
});
})