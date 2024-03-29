//The test expects you to provide a Calculator object with the following methods:
//Calculator.add()
//Calculator.subtract()
//Calculator.multiply()
//Calculator.divide()
//Each method expects two arguments, so for instance:
//Calculator.add(1,4) should return 5.
//Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.

var Calculator = {
    add: function(num1, num2) {
     return num1 + num2;
   },
 
   subtract: function(num1, num2) {
     return num1 - num2;
   },
 
   multiply: function(num1, num2) {
     return num1 * num2;
   },
 
   divide: function(num1, num2) {
     if (num2 === 0) {
       return false;
     }
     return num1 / num2;
   }
 };