// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// If either input is an empty string, consider it as zero.

sumStr = (a,b) => String(+a + +b);

//or 

function sumStr(a,b) {
  return String(Number(a) + Number(b));
  }

//or

function sumStr(a,b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2)
  }