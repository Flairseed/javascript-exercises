const reverseString = function(phrase) {
  split_phrase = phrase.split("");
  split_phrase = split_phrase.reverse();
  reversed_phrase = split_phrase.join("");
  return reversed_phrase
};

// Do not edit below this line
module.exports = reverseString;
