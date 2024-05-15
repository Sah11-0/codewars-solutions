// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognized rating is received, then you need to return: "Rating not recognized" 

function calculateTip(amount, rating) {
    if (rating === 'Excellent'){
      return Math.ceil(amount * 0.2);
    } else if (rating === 'Good'){
      return Math.ceil(amount * .10);
    } else if (rating === 'Great'){
      return Math.ceil(amount * .15);
    }else if (rating === 'Poor'){
      return Math.ceil(amount * .05);
    }else if (rating === 'Terrible'){
      return amount * 0;
    } else {
      return 'Rating not recognized';
    }
  }