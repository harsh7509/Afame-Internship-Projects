const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;

    if (buttonText === 'C') {
      num1 = '';
      num2 = '';
      operator = '';
      display.value = '';
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      operator = buttonText;
      num1 = parseFloat(display.value);
      display.value = '';
    } else if (buttonText === '=') {
      num2 = parseFloat(display.value);

      if (operator === '+') {
        display.value = num1 + num2;
      } else if (operator === '-') {
        display.value = num1 - num2;
      } else if (operator === '*') {
        display.value = num1 * num2;
      } else if (operator === '/') {
        if (num2 === 0) {
          display.value = 'Error: Division by zero';
        } else {
          display.value = num1 / num2;
        }
      }
    } else {
      display.value += buttonText;
    }
  });
});