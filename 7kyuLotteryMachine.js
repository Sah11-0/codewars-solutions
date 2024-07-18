//Your task is to write an update for a lottery machine. Its current version produces a sequence of random letters and integers (passed as a string to the function). Your code must filter out all letters and return unique integers as a string, in their order of first appearance. If there are no integers in the string return "One more run!"

function lottery(str) {
    let uniqueNumbers = new Set();
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i]) && str[i] !== ' ') {
        uniqueNumbers.add(str[i]);
      }
    }
    return uniqueNumbers.size > 0 ? Array.from(uniqueNumbers).join('') : "One more run!";
  }
  