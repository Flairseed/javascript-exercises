const removeFromArray = function(inputArray, ...removeElements) {
  const filterFunction = (element) => !removeElements.includes(element);
  const inputArray = inputArray.filter(filterFunction);
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
