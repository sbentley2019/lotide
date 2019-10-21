const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  const result1 = letterPositions("hello");

  it("returns true if 'h' is at index 0", () => {
    assert.deepEqual(result1['h'], ['0']);
  });

  it("returns true if 'l' is at index 2 and 3", () => {
    assert.deepEqual(result1['l'], ['2', '3']);
  });
});