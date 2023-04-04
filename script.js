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

//An AI has infected a text with a character!!
//This text is now fully mutated to this character.
//If the text or the character are empty, return an empty string.
//There will never be a case when both are empty as nothing is going on!!
//Note: The character is a string of length 1 or an empty string.

function contamination(text, char){
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    newText += char;
    } return newText;
  }

  //Write a program that finds the summation of every number from 1 to num. 
  //The number will always be a positive integer greater than 0.
  
  var summation = function (num) {
    let sum = 0
    for (let i = 1; i <= num; i++){
      sum += i
    }
    return sum;
  }

  //Write a function that accepts an integer n and a string s as parameters, 
  //and returns a string of s repeated exactly n times.
  
  function repeatStr (n, s) {
    return s.repeat(n);
}