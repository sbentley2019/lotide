const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  const result1 = countLetters("lighthouse in the house");

  it("returns true if the string contains 'l' once.", () => {
    assert.strictEqual(result1["l"], 1);
  });

  it("returns true if the string contains 'i' 2 times.", () => {
    assert.strictEqual(result1["i"], 2);
  });

  it("returns true if the string contains 'h' 4 times.", () => {
    assert.strictEqual(result1["h"], 4);
  });  
});