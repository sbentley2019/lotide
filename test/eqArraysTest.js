const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true when comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("returns true when comparing [[2, 3], [4]] and [[2, 3], [4]]", () => {
    
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it("returns false when comparing [[2, 3], [4]], [[2, 3], [4, 5]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it("returns false when comparing [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  });

  it("returns true when comparing [[2, 3], [[[4]]]] and [[2, 3], [[[4]]]]", () => {
    assert.deepEqual(eqArrays([[2, 3], [[[4]]]], [[2, 3], [[[4]]]]), true);
  });
});