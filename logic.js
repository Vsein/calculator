function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let ans;
  if (operator == '+') ans = add(a, b);
  else if (operator == '-') ans = subtract(a, b);
  else if (operator == '*') ans = multiply(a, b);
  else if (operator == '/') ans = (b === 0 ? 80085 : divide(a, b));
  return Math.round(1e8 * ans) / 1e8;
}

function getLast(string) {
  return string.slice(-1);
}

function hasAnOperator(string) {
  let operators = ['+', '-', '*', '/'];
  return operators.indexOf(getLast(string)) !== -1;
}

function hasADot(string) {
  return string.indexOf('.') !== -1;
}

function addDigit(e) {
  const display = document.querySelector('.display p');
  if (hasAnOperator(display.textContent)) {
    display.nextElementSibling.textContent += this.id;
  } else {
    display.textContent += this.id;
  }
}

function addDot(e) {
  const display = document.querySelector('.display p');
  if (hasAnOperator(display.textContent)) {
    const next = display.nextElementSibling;
    if (hasADot(next.textContent)) return;
    next.textContent += '.';
  } else {
    if (hasADot(display.textContent)) return;
    display.textContent += '.';
  }
}

function addOperation(e) {
  const display = document.querySelector('.display p');
  if (hasAnOperator(display.textContent)) calc();
  display.textContent += this.textContent;
}

function clear() {
  const display = document.querySelector('.display p');
  display.textContent = '';
  console.log(display.nextElementSibling);
  display.nextElementSibling.textContent = '';
}

function del() {
  const display = document.querySelector('.display p');
  let a = display.textContent;
  let b = display.nextElementSibling.textContent;
  if (b !== '') {
    display.nextElementSibling.textContent = b.slice(0, -1);
  } else if (a !== '') {
    display.textContent = a.slice(0, -1);
  } else {
    return;
  }
}

function calc() {
  const display = document.querySelector('.display p');
  let a = display.textContent;
  let b = display.nextElementSibling.textContent;
  if (a === '') return;
  if (b === '') {
    display.textContent = (hasAnOperator(a) ? a.slice(0, -1) : a);
    return;
  }
  display.textContent = operate(getLast(a), +a.slice(0, -1), +b);
  display.nextElementSibling.textContent = '';
  return;
}

function getKeyboardAction(e) {
  if (e.shiftKey) {
    if (e.keyCode == 56) {
      document.getElementById('multiply').click();
      return;
    } else if (e.keyCode == 187) {
      document.getElementById('add').click();
      return;
    }
  }
  if (e.keyCode == 13) calc();
  let button = document.querySelector(`button[data-key="${e.keyCode}"]`);
  if (button) button.click();
}

const numbers = document.querySelectorAll('.num');
numbers.forEach(num => num.addEventListener('click', addDigit));

const operators = document.querySelectorAll('.operation');
operators.forEach(operator => operator.addEventListener('click', addOperation));

document.querySelector('#clear').addEventListener('click', clear);
document.querySelector('#equals').addEventListener('click', calc);
document.querySelector('#delete').addEventListener('click', del);
document.querySelector('#dot').addEventListener('click', addDot);

window.addEventListener('keydown', getKeyboardAction);
