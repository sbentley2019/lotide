const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  console.log(eqObjects(actual, expected));
};

module.exports = assertObjectsEqual;