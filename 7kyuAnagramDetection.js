//An anagram is the result of rearranging the letters of a word to produce a new word.
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// write the function isAnagram

function isAnagram(test, original) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    if (test.length !== original.length) {
      return false;
    }
    
    let str1 = test.split("").sort().join("");
    let str2 = original.split("").sort().join("");
    
    let result = (str1 === str2);
    return result;
  };