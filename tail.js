const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(list) {
  if (list === undefined || typeof list === 'number' || list.length === 1) {
    return [];
  } else {
    const arrayTail = list.slice(1);
    return arrayTail;
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

console.log("------------");
console.log(tail([]));
console.log(tail([1]));