//Write a function that checks if a given string (case insensitive) is a palindrome. 

function isPalindrome(x) {
    const formattedStr = x.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return formattedStr === formattedStr.split('').reverse().join('')
  }