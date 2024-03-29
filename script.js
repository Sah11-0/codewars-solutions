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

//Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.
  
var summation = function (num) {
  let sum = 0;
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
//or 
function repeatStr (n, s) {
  if (n > 0){
    return s.repeat(n);
  } else {
  return '';
    }
}

//This code does not execute properly. Try to figure out why.

function multiply(a, b){
  let product = (a * b);
  return product;
}

//Consider an array/list of sheep where some sheep may be missing
//from their place. We need a function that counts the number of sheep 
//present in the array (true means present). Hint: Don't forget to check 
//for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let count = 0;
  for(let i = 0; i < arrayOfSheep.length; i++){
    if (arrayOfSheep[i] === true){
      count++
    }
  }
  return count;
}

//Create a function that takes an integer as an argument and returns 
//"Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number){
  if (number % 2 === 0){
    return 'Even'
  } else {
    return 'Odd'
  }
}

//Function should return a dictionary/Object/Hash with "status" as a key, 
//whose value can : "busy" or "available" depending on the truth value of the argument is_busy.
//But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {status: msg}
}

//Provided is a function find which accepts two parameters in the following order: 
//array, element and returns the index of the element if found and "Not found" otherwise. 
//Your task is to shorten the code as much as possible in order to meet the strict character 
//count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

function find(a, e) {
  return a.includes(e) ? a.indexOf(e) : "Not found"
}

//Complete the square sum function so that it squares each number passed into it and 
//then sums the results together.

function squareSum(numbers){
  let sum = 0 
  for(let i = 0; i < numbers.length; i++){
    sum += (numbers[i] ** 2)
  }
  return sum;
}

//What if we need the length of the words separated by a space to be added 
//at the end of that same word and have it returned as an array?

function addLength(str) {
  const words = str.split(' ')
  return words.map(word => `${word} ${word.length}`)
}

//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString();
}

//We need a function that can transform a string into a number. What ways of achieving this do you know?

const stringToNumber = function(str){
  return parseInt(str);
}

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}

//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.
//Note: only positive integers will be tested.

function otherAngle(a, b) {
  let c = 180 - (a + b) 
  return c;
}

//Let's play! You have to return which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
  return p1 === p2 
  ? "Draw!"
  : ((p1 === "rock" && p2 === "scissors") || 
     (p1 === "paper" && p2 === "rock") ||
     (p1 === "scissors" && p2 === "paper")) 
  ? "Player 1 won!"
  : "Player 2 won!";
}

//Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
//When bool is truthy, func1 should be called, otherwise call the func2.

_if = (bool, func1, func2) => bool ? func1() : func2()

//You get an array of numbers, return the sum of all of the positives ones.
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0 
  arr.forEach(num => num > 0 && (sum += num))
  return sum;
}

//You must return false without ever actually using the word false...

function ifChuckSaysSo(){
  return !true;
}

//Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  return string.split(" ");
}

//ES6 has introduced another way of joining strings. Your task is to find out what this is 
//and write a function that will add two strings together, there must be a space between the two strings.

function joinStrings(string1, string2){
  return `${string1} ${string2}`;
}

//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
//Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let str = ''
  for(let i = 1; i <= num; i++){
    str += i + " " + "sheep...";
  }
  return str;
}

//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
  const trimmed = x.split(' ').join('');
    return trimmed;
  }

//Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains 
//the Y chromosome, return "Congratulations! You're going to have a son.";
  function chromosomeCheck(sperm) {
    if (sperm.includes('XX')){
      return "Congratulations! You\'re going to have a daughter."
    } else if (sperm.includes('XY')){
      return "Congratulations! You're going to have a son."
    }
  }

  //or
  const chromosomeCheck = (sperm) => {
    return sperm === 'XX' 
      ? "Congratulations! You're going to have a daughter."
      : "Congratulations! You're going to have a son." 
  }  

//Complete the function which returns the weekday according to the input number:
//1 returns "Sunday"
//2 returns "Monday"
//3 returns "Tuesday"
//4 returns "Wednesday"
//5 returns "Thursday"
//6 returns "Friday"
//7 returns "Saturday"
//Otherwise returns "Wrong, please enter a number between 1 and 7"

function whatday(num) { 
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[num - 1] || "Wrong, please enter a number between 1 and 7"
}

//Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter ++){
    newArray.push(counter);
  }
  
  return newArray;
}

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  if (n > 0 && m > 0){
      return (n * m)
  } else {
    return 0
  }
}
//or
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase()
}
//or
const makeUpperCase = str => str.toUpperCase()

//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (Math.sign(num) === 1){
    return - + num
  } else {
    return num
  }
}
//or
function makeNegative(num) {
  return -Math.abs(num)
}

//Your function takes two arguments:
//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
//The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}
//or 
function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld > (sonYearsOld * 2)){
  return dadYearsOld - (sonYearsOld * 2)
} else if (dadYearsOld < (sonYearsOld * 2)){
} return (sonYearsOld * 2) - dadYearsOld 
}

//Now you have to write a function that takes an argument and returns the square of it.

function square(arg){
  return Math.pow(arg,2);
}

//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
  if (operation === '+'){
    return value1 + value2
  } else if (operation === '-'){
    return value1 - value2
  } else if (operation === '*'){
    return value1 * value2
  } else if (operation === '/'){
    return value1 / value2
  }
}


