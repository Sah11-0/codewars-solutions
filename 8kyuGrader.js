// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"


const grader = score => {
    return score > 1 || score < 0.6 ? 'F' :
        score >= 0.9 ? 'A' :
            score >= 0.8 ? 'B' :
                score >= 0.7 ? 'C' : 'D';

    //solution 2
    const grader = score =>
        score < 0.6 || score > 1 ? `F` : score < 0.7 ? `D` : score < 0.8 ? `C` : score < 0.9 ? `B` : `A`;