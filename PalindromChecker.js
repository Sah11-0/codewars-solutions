//Write a function isPalindrome that takes a string as an input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

const isPalindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    if (reversedStr === str) {
        return true; 
    } else {
        return false; 
    }
}