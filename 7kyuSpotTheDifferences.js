//Write a program spot_diff/Spot that will compare two strings and return a list with the positions where the two strings differ. 
// • If both strings are the same, return []
// • Both strings will always be the same length
// • Capitalization and punctuation matter

function spot(s1,s2){
    let diff = []; 
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        diff.push(i);
      }
    }
    
    return diff;
  }