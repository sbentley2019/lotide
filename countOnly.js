const countOnly = function(allItems, itemsToCount) {
  let finalObj = {};

  for (let element of allItems) {
    if (itemsToCount[element]) {
      finalObj[element] === undefined ? finalObj[element] = 1 : finalObj[element]++;
    }
  }

  return finalObj;
}

module.exports = countOnly;