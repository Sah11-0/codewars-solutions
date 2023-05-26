//Given an integer n and two other values, build an array of size n filled with these two values alternating.


function alternate(n, firstValue, secondValue){
    let array = [];
    let current = firstValue
    for (let i = 0; i < n; i++){
      array.push(current);
      current = current === firstValue ? secondValue : firstValue;
    }
    return array;
  }