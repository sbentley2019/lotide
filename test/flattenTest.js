const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("returns true if [1, 2, [3, 4], 5, [6]]) flattened is [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});