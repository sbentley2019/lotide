const takeUntil = function(array, callback) {
  let result = [];
  for (let i of array) {
    if (callback(i)) break;
    else result.push(i);
  }
  return result;
};

module.exports = takeUntil;