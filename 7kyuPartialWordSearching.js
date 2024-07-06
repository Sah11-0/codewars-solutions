//Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" 

function wordSearch(query, seq){
    const lowerQuery = query.toLowerCase();
    const newArr = [];
     for (let i = 0; i < seq.length; i ++) {
       if (seq[i].toLowerCase().includes(lowerQuery)) {
           newArr.push(seq[i]);
         }    
        }
     
       if (newArr.length === 0) {
          return ['Empty'];
     }
     
     return newArr;
   }

//solution 2
function wordSearch(query, seq){
    query = query.toLowerCase();
    const arr = seq.filter(e => e.toLowerCase().includes(query));
    return arr.length ? arr : ['Empty'];
  }
