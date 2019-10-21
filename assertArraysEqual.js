const eqArrays = require("./eqArrays");

const assertArraysEqual = function(firstArray, secondArray) {
  console.log(eqArrays(firstArray, secondArray));
};

module.exports = assertArraysEqual;