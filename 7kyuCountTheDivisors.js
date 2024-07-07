//Count the number of divisors of a positive integer n.
// Note you should only return a number, the count of divisors. 

function getDivisorsCnt(n){
    let count = 0; 
    let sqrt_n = Math.floor(Math.sqrt(n));
    for (let i = 0; i <= sqrt_n; i ++) {
      if (n % i === 0) {
         if (i * i === n) {
          count += 1;
      } else {
        count += 2;
      }
     }
    }
    return count;
  }