//Given an array with exactly 5 strings "a", "b" or "c", check if the array contains three and two of the same values.

function checkThreeAndTwo(array) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === "a") {
        countA++
      } else if (array[i] === "b") {
        countB++
      } else if (array[i] === "c") {
        countC++
      }
    }
    
    if ((countA === 3 && countB === 2) || 
        (countA === 3 && countC === 2) || 
        (countB === 3 && countC === 2) || 
        (countB === 3 && countA === 2) || 
        (countC === 3 && countA === 2) || 
        (countC === 3 && countB === 2)) {
     return true;
    } else {
     return false;
    }
  }