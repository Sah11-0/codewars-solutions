//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number. 
//Constraint: 1 <= month <= 12

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1;
    } else if (month >= 4 && month <= 6) {
      return 2;
    } else if (month >= 7 && month <= 9) {
      return 3; 
    } else if (month >= 10 && month <= 12) {
      return 4; 
    } else {
      return -1; 
    }
  }

  //or

  const quarterOf = (month) => {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
    
  }

  //or

  const quarterOf = month => Math.ceil(month / 3);

  //or

  const quarterOf = (month, quarter = 4) => {
    switch (month) {
      case 1:
      case 2:
      case 3:
        quarter = 1;
        break;
      case 4:
      case 5:
      case 6:
        quarter = 2;
        break;
      case 7:
      case 8:
      case 9:
        quarter = 3;
        break;
    }
    return quarter;
  };
