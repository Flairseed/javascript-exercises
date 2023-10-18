const repeatString = function(phrase, repeats) {
  let finalString = '';
  if (repeats >= 0) {
    for (let i=0; i<repeats; i++) {
      finalString += phrase;
    }
  }
  else {
    finalString = "ERROR";
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
