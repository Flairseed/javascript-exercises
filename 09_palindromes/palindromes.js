const palindromes = function (word) {
  const originalWord = word.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reverseWord = Array.from(originalWord).reverse().join("");
  return originalWord === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
