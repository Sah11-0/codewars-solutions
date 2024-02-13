//Debug a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null.

var calculate = function calculate(a, o, b) {
    var result;
  
    if (o === "+") {
      return a + b;
    } else if (o === "-") {
      return a - b;
    } else if (o === "/" && b !== 0) {
      return a / b;
    } else if (o === "*") {
      return a * b;
    } else {
      result = null;
    }
  
    return result;
  };

  //or

  const calculate = (a, o, b) =>
  o === `+` ? a + b : o === `-` ? a - b : o === `*` ? a * b : o === `/` && b ? a / b : null;