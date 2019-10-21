const without = require('../without.js');
const assert = require('chai').assert;

describe("#without", () => {
  it("returns true if [1, 2, 3] without [1]) equals [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns true if ['1', '2', '3'] without [1, 2, '3']) equals ['1', '2']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("returns true if [1, 2, 3] without [4]) equals [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [4]), [1, 2, 3]);
  });
});



