const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe",
    "Joe"
  ];
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it("returns true if the array contains 'Jason' once.", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns true if the array contains 'Karima' zero times.", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns true if the array contains 'Fang' twice.", () => {
    assert.strictEqual(result1["Fang"], 2);
  });  
});