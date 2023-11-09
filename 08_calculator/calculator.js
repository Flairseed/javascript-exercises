const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
};

const multiply = function(nums) {
  let total = nums.length > 0 ? 1 : 0;
  for (let num of nums) {
    total *= num;
  }
  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let total = 1
	for (i = num; i > 1; i--) {
    total *= i
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
