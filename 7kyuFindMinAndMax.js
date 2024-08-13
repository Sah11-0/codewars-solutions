//Implement a function that returns the minimal and the maximal value of a list (in this order).

function getMinMax(arr){
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    return [minVal, maxVal];
  };