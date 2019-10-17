const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️  Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌️❌️❌️ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKey = function(obj, callback) {
  let result = undefined;

  for (let i of Object.keys(obj)) {
    if (callback(obj[i])) {
      result = i;
      break;
    }
  }
  return result;
};

const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 5 }
};

assertEqual(findKey(testObj, x => x.stars === 2), "noma"); //true
assertEqual(findKey(testObj, x => x.stars === 5), "Akelarre"); //true
assertEqual(findKey(testObj, x => x.stars === 6), undefined); //true
assertEqual(findKey(testObj, x => x.stars === 2), "elBulli"); //false