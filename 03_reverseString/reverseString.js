const reverseString = function(phrase) {
  let split_phrase = phrase.split("");
  split_phrase = split_phrase.reverse();
   const reversed_phrase = split_phrase.join("");
  return reversed_phrase;
};

// Do not edit below this line
module.exports = reverseString;
