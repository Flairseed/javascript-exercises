const sumAll = function(num1, num2) {
  let sum = 0;
  const lowerBound = num1 < num2 ? num1 : num2;
  const upperBound = num1 > num2 ? num1 : num2;
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
