//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x){
    if (typeof x === 'number'){
     return (50 * x) + 6
    } else {
    return 'Error'
    }
  }
  //or
  function problem(x){
    if (typeof x !== 'string'){
     return (50 * x) + 6
    } else {
    return 'Error'
    }
  }
  //or
  function problem(x){
    return typeof x === 'number' ? x * 50 + 6 : 'Error' 
  }