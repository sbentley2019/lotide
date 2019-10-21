const head = function(list) {
  if (list === undefined) {
    return undefined;
  } else if (typeof list === 'number' || list.length === 1) {
    return list;
  } else {
    return list[0];
  }
};

module.exports = head;