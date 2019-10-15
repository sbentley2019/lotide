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

const flatten = function(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);  // => true
