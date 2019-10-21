const tail = function(list) {
  if (list === undefined || typeof list === 'number' || list.length === 1) {
    return [];
  } else {
    const arrayTail = list.slice(1);
    return arrayTail;
  }
};

module.exports = tail;