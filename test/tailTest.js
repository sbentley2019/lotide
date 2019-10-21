const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });

  it("returns Hello for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse','Labs']);
  });

  it("returns undefined for an empty array []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns num for num", () => {
    assert.deepEqual(tail(1), []);
  });
});