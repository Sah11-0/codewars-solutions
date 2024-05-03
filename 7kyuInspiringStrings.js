//Given a string of space separated words, return the longest word.
//If there are multiple longest words, return the rightmost longest word.

function longestWord(stringOfWords) {
    const words = stringOfWords.split(" ");
    let longest = "";
    let maxLength = 0;
    
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        if (currentWord.length >= maxLength) {
            longest = currentWord;
            maxLength = currentWord.length;
        }
    }
    
    return longest;
}

//or

function longestWord(str){
    return str.split(' ').sort((b, a) => b.length - a.length).pop();
  }

 