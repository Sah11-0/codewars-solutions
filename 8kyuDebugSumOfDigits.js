//Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
// 123  => 6
// 223  => 7
// 1337 => 14

function getSumOfDigits(integer) {
    var sum = 0;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += parseInt(digits[ix]);
    }
    return sum;
  }