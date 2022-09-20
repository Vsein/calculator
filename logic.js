const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
}

const divide = function(a, b) {
  return a / b;
}

const power = function(a, b) {
  return a ** b;
};

const factorial = function(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
};

const operate(operator, a, b) {
  if (operator == '+') return add(a, b);
  else if (operator == '-') return subtract(a, b);
  else if (operator == '*') return multiply(a, b);
  else if (operator == '/') return multiply(a, b);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
