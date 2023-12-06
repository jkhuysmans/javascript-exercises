const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(sum) {
  
	return sum.reduce((total, value) => total + value, 0);
};

const multiply = function(multiply) {
  return multiply.reduce((total, value) => total * value);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(value) {
	// if (n === 0) return 1;
  let product = 1;
  for (let i = value; i > 0; i--) {
    product *= i;
  }
  return product;
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
