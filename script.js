"use strict"

/* 
Дано ціле число N (ввести через prompt). 
Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const START_VALUE = 1;
const END_VALUE = 100;
const POW = 2;

const inputValue = prompt('Please enter some number')

if (inputValue === null) {
  alert("You clicked 'Cancel'");
}
else if (!inputValue.trim()) {
  alert('You entered nothing (or spaces only)');
}
else if (isNaN(inputValue)) {
  alert('You entered not a number');
}
else {
  const absInt = Math.abs(parseInt(inputValue));

  const result = [];
for (let i = START_VALUE; i <= END_VALUE; i ++) {

  if (Math.pow(i, POW) < absInt) {
    result.push(i);
  }
}

alert(`
  All of these numbers (from 1 to 100) raised to the power of ${POW} do not exceed the number you entered (${absInt}):\n ${result.join(', ')}
  `)
}
