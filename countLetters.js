const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(inputString) {
  let finalObj = {};

  for (let i of inputString) {
    if (i === " ") continue;
    finalObj[i] === undefined ? finalObj[i] = 1 : finalObj[i]++;
  }
  return finalObj;
};

const result1 = countLetters("lighthouse in the house");

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);