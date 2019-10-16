const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) return false;
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  const inspect = require('util').inspect;
  const failed = `❌️❌️❌️ Assertion Failed: [${inspect(obj1)}] !== [${inspect(obj2)}]`;
  let keyArr = Object.keys(obj1);

  if (keyArr.length !== Object.keys(obj2).length) {
    return failed;
  }
  for (let i of keyArr) {
    if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (!eqArrays(obj1[i], obj2[i])) {
        return failed;
      }
    } else {
      if (obj1[i] !== obj2[i]) {
        return failed;
      }
    }
  }
  return `✔️ ✔️ ✔️  Assertion Passed: [${inspect(obj1)}] === [${inspect(obj2)}]`;
};

const assertObjectsEqual = function(actual, expected) {
  console.log(eqObjects(actual, expected));
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2);