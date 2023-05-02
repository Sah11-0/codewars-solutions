//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    str = str.toLowerCase()
    let charSet = {}
    for (let char of str){
      if (charSet[char]){
        return false
      } charSet[char] = true
    } return true
  }