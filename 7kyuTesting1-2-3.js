//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.

function number(array){
    let result = array.map(function(e,i){
    return (i + 1) + ': ' + e
  })
    return result;
}
//or
const number = function(array) {
    return array.map(function (line, index) {
      return (index + 1) + ": " + line;
    });
  }
//or
  const number = array => array.map((n, i) => `${i + 1}: ${n}`);