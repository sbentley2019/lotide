const countLetters = function(inputString) {
  let finalObj = {};

  for (let i of inputString) {
    if (i === " ") continue;
    finalObj[i] === undefined ? finalObj[i] = 1 : finalObj[i]++;
  }
  return finalObj;
};

module.exports = countLetters;