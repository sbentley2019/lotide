const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return `❌️❌️❌️ Assertion Failed: [${firstArray}] !== [${secondArray}]`;
    }
  }
  return `✔️ ✔️ ✔️  Assertion Passed: [${firstArray}] === [${secondArray}]`;
};

const assertArraysEqual = function(firstArray, secondArray) {
  console.log(eqArrays(firstArray, secondArray));
};

const without = function(sourceArray, removeArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let isUnique = true;
    for (let j = 0; j < removeArray.length; j++) {
      if (sourceArray[i] === removeArray[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) newArray.push(sourceArray[i]);
  }
  return newArray;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => true

const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);