const letterPositions = function(sentence) {
  const results = {};

  for (let i in sentence) {
    let letter = sentence[i];

    if (letter === " ") continue;
    
    results[letter] === undefined ? results[letter] = [i] : results[letter].push(i);
  }
  return results;
};

module.exports = letterPositions;