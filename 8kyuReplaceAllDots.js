// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly. Fix the bug.

// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

const replaceDots = function (str) {
    return str.replaceAll(".", "-");
  };

  //or

  const replaceDots = str => str.replaceAll('.', '-')
