// Bear the Freelancer charges clients on the hour, but he adjusts his rate depending on how close friends he is with his clients. For close friends, he charges $25 per hour, for his other friends he charges $50, for his acquaintances his hourly rate is $100, reaching $125 for all his other clients.
// You’ll receive a list of lists, representing all the jobs Bear the Freelancer carried out for the month. Each array within the outer list is comprised of the number of hours worked, and the proximity to the client as a string, the possible values being 'Close Friend', 'Friend', 'Acquaintance', or any other string for the rest of his clients. The recognition of those three strings ('Close Friend', 'Friend', and 'Acquaintance') should be case insensitive.

function bearDollars(arr) {
    return arr.map(([hours, client]) => {
      const hoursNum = parseInt(hours); 
      switch (client.toLowerCase()) {
        case 'close friend':
          return hoursNum * 25;
        case 'friend':
          return hoursNum * 50;
        case 'acquaintance':
          return hoursNum * 100;
        default:
          return hoursNum * 125;
      }
    }).reduce((acc, curr) => acc + curr, 0); 
  }