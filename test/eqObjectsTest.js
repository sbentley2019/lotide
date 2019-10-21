const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true if { a:'1', b:'2' } equals { b:'2', a:'1' }", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  // it("returns '5' for ['5']", () => {
  //   assert.strictEqual(head(['5']), '5');
  // });

  // it("returns Hello for [Hello, Lighthouse, Labs]", () => {
  //   assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  // });

  // it("returns undefined for an empty array []", () => {
  //   assert.strictEqual(head([]), undefined);
  // });

  // it("returns num for num", () => {
  //   assert.strictEqual(head(1), 1);
  // });
});

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false