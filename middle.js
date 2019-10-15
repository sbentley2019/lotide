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
}

const middle = function(array) {
  if(array.length < 3) {
    return [];
  } else if(array.length % 2 !== 0) {
    return [array[(array.length - 1) / 2]];
  } else {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
}

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]