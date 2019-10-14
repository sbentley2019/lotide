const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const head = function(list) {
  if (list === undefined) {
    return undefined;
  } else if (typeof list === 'number' || list.length === 1) {
    return list;
  } else {
    return list[0];
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(1), 1);
assertEqual(head([]), 1);