const removeFromArray = function(inputArray, ...removeElements) {
  filterFunction = (element) => !removeElements.includes(element);
  inputArray = inputArray.filter(filterFunction);
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
