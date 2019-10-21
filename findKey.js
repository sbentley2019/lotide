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

module.exports = findKey;