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

const letterPositions = function(sentence) {
  const results = {};

  for (let i in sentence) {
    let letter = sentence[i];

    if (letter === " ") continue;
    
    results[letter] === undefined ? results[letter] = [i] : results[letter].push(i);
  }
  return results;
};

const result1 = letterPositions("hello");

assertArraysEqual(result1['h'], ['0']);
assertArraysEqual(result1['e'], ['1']);
assertArraysEqual(result1['l'], ['2', '3']);
assertArraysEqual(result1['o'], ['4']);