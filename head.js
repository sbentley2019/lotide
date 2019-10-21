const head = function(list) {
  if (list === undefined) {
    return undefined;
  }
  if (!Array.isArray(list)) {
    return list;
  }
  return list[0];
};

module.exports = head;