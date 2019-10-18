const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  let keyArr = Object.keys(obj1);
  
  if(keyArr.length !== Object.keys(obj2).length) return false;

  for (let i of keyArr) {
    if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (!eqArrays(obj1[i], obj2[i])) return false;
    } else if (typeof obj1[i] === "object" && typeof obj2[i] === "object") {
      if (!eqObjects(obj1[i], obj2[i])) return false;
    } else {
        if (obj1[i] !== obj2[i]) return false;
    }
  }
  return true;
};

//test cases
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false