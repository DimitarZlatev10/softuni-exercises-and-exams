const dealership = require("../dealership");
const assert = require("chai").assert;

describe("dealership", () => {
  describe("newCarCost", () => {
    it(`should return deducted price`, () => {
      assert.equal(dealership.newCarCost("Audi A4 B8", 15000), 0);
      assert.equal(dealership.newCarCost("Audi A4 B8", 14000), -1000);
      assert.equal(dealership.newCarCost("Audi A4 B8", 16000), 1000);
    });
  });
  describe("carEquipment", () => {
    it(`return array with selected extras`, () => {
      assert.equal(dealership.carEquipment([`AA`, `BB`], [0]), `AA`);
      assert.equal(dealership.carEquipment([`AA`, `BB`], [1]), `BB`);
    });
  });
  describe("euroCategory", () => {
    it(`return message with final price you will need to pay`, () => {
      assert.equal(
        dealership.euroCategory(5),
        `We have added 5% discount to the final price: 14250.`
      );
      assert.equal(
        dealership.euroCategory(4),
        `We have added 5% discount to the final price: 14250.`
      );

      assert.equal(
        dealership.euroCategory(3),
        "Your euro category is low, so there is no discount from the final price!"
      );
    });
  });
});
