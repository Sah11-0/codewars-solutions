//In this kata, you are asked to square every digit of a number and concatenate them.
//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//Note: The function accepts an integer and returns an integer.

function squareDigits(num){
    const digits = num.toString().split('');
    const squaredDig = digits.map(digit => Math.pow(parseInt(digit), 2));
    const squaredNum = parseInt(squaredDig.join(''));
    return squaredNum;
  }