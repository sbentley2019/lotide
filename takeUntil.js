const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return `❌️❌️❌️ Assertion Failed: [${firstArray}] !== [${secondArray}]`;
  }
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

const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (callback(i)) break;
    else result.push(i);
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]); // true

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]); // true

console.log('---');

const data3 = [ 1, 2, 3, 4 ];
const results3 = takeUntil(data3, x => x === 4);
assertArraysEqual(results3, [ 1, 2, 3, 4 ]); // false
