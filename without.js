const without = function(sourceArray, removeArray) {
  let newArray = [];

  for (let i = 0; i < sourceArray.length; i++) {
    let isUnique = true;
    for (let j = 0; j < removeArray.length; j++) {
      if (sourceArray[i] === removeArray[j]) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) newArray.push(sourceArray[i]);
  }
  return newArray;
};

module.exports = without;