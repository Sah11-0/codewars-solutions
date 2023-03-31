//Build a function that returns an array of integers from n to 1 where n > 0.

const reverseSeq = n => {
  let arr = []; 
  for( i = n; i > 0; i--){
    arr.push(i);
  }
  return arr;
};

//Write a function that takes an array of numbers and returns the sum of the numbers. 
//The numbers can be negative or non-integer. If the array does not contain any numbers 
//then you should return 0.

function sum (numbers) {
  return numbers.reduce((a,b) => a + b, 0);
};