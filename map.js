const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

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

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // => true;
assertArraysEqual(map(["blue", "red", "green", "yellow"], word => word.length), [1, 2, 3, 4]); // => false
assertArraysEqual(map(["blue", "red", "green", "yellow"], word => word.length), [4, 3, 5, 6]); // => true