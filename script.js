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

//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number){
  return number % 2 === 0 ? number * 8 : number * 9
} 

//Volume (centimeters cubed) of a cuboid formula:
//Volume = Length * Width * Height
//We only have the volume, and the length of a single side
//Find out whether the cuboid has equal sides (= is a cube).
//Return true if the cuboid could have equal sides, return false otherwise.
//Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//Note: side will be an integer

var cubeChecker = function(volume, side){
  if (volume <= 0 || side <= 0){
    return false;
  } else if (volume === side ** 3){
      return true;
  } else {
    return false;
  }
}
