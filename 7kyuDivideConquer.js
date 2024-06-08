//CHALLENGE:
//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers. Return as a number.

//solution 1:
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

//solution 2:
function divCon(x) {
   return x.reduce((sum, current) => {
     if (typeof current === 'number') {
       return sum + current;
     } else {
       return sum - Number(current);
     }
   }, 0);
 }
