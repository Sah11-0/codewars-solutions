// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.

function twoArePositive(a, b, c) {
    let positiveCount = 0
  
    if (a > 0) {
      positiveCount++;
    }
    if (b > 0) {
      positiveCount++;
    }
    if (c >0) {
      positiveCount++;
    }
    
    return positiveCount === 2; 
  }