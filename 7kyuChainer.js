//Write a generic function chainer that takes a starting value, and an array of functions to execute on it.
//The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function chain(input, fs){
    let result = input
    for (let i = 0; i < fs.length; i++){
      const currentFunction = fs[i];
      result = currentFunction(result);
    } return result
  }