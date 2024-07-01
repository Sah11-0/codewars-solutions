//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
    const digits = Math.abs(number).toString().split('').map(Number);
    return digits.reduce((a, b) => a + b); 
  }