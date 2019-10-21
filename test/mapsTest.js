const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("returns true if map(words, word => word[0]) equals ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns true if map(['blue', 'red', 'green', 'yellow'], word => word.length) equals [1, 2, 3, 4]", () => {
    assert.deepEqual(map(["blue", "red", "green", "yellow"], word => word.length), [4, 3, 5, 6]);
  });
});