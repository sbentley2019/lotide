const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns false when comparing [1, 3, 3], [1, 2, 3]", () => {
    assert.deepEqual(assertArraysEqual([1, 3, 3], [1, 2, 3]), false);
  });
});