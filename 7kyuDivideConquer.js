//CHALLENGE:
//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.

//solution:
function divCon(x){
    let integerSum = 0;
    let stringSum = 0;
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "number") {
         integerSum += x[i];
      } else if (typeof x[i] === "string") {
         stringSum += parseInt(x[i]);
      }
    }
    
    return integerSum - stringSum;
  }