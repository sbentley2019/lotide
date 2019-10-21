const findKeyByValue = function(obj, val) {
  let index = undefined;

  for (let i in obj) {
    if (obj[i] === val) index = i;
  }

  return index;
};

module.exports = findKeyByValue;