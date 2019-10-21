const eqArrays = require("./eqArrays");

const assertArraysEqual = function(firstArray, secondArray) {
  return eqArrays(firstArray, secondArray);
};

module.exports = assertArraysEqual;