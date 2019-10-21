const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let keyArr = Object.keys(obj1);
  
  if(keyArr.length !== Object.keys(obj2).length) return false;

  for (let i of keyArr) {
    if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (!eqArrays(obj1[i], obj2[i])) return false;
    } else if (typeof obj1[i] === "object" && typeof obj2[i] === "object") {
      if (!eqObjects(obj1[i], obj2[i])) return false;
    } else {
        if (obj1[i] !== obj2[i]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;