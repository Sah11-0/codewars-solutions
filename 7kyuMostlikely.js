// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

function mostLikely(prob1,prob2){
    const [a, b] = prob1.split(':').map(Number);
    const [c, d] = prob2.split(':').map(Number);
    const p1 = a / (a + b);
    const p2 = c / (c + d);

    return p1 > p2;
  }

//solution2 

function mostLikely(prob1,prob2){
    let [a, b] = prob1.split(':');
    let [c, d] = prob2.split(':');
    
    return a/b > c/d;
  }

//solution3

function mostLikely(p1,p2){
    p1 = p1.split(':');
    p2 = p2.split(':');
  
    p1 = p1[0]/p1[1];
    p2 = p2[0]/p2[1];
    
    return (p1 > p2);
  }