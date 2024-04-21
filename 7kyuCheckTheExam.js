// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.

function checkExam(array1, array2) {
    let score = 0;
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] === '') {
        continue; 
      } else if (array2[i] === array1[i]) {
        score += 4;
      } else {
        score -= 1;
      }
    }
    return Math.max(score, 0);
  }