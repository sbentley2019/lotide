const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {
  const testObj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 5 }
  };

  it("returns true if the key for stars: 2 is 'noma'", () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 2), "noma");
  });

  it("returns true if the key for stars: 5 is 'Akelarre'", () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 5), "Akelarre");
  });

  it("returns true if the key for stars: 6 is undefined", () => {
    assert.strictEqual(findKey(testObj, x => x.stars === 6), undefined);
  });
});