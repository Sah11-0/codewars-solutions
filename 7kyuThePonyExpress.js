// The Pony Express was a mail service operating in the US in 1859-60.
// It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.
// How it worked
// There were a number of stations, where:
// The rider switched to a fresh horse and carried on, or
// The mail bag was handed over to the next rider
// Kata Task
// stations is a list/array of distances (miles) from one station to the next along the Pony Express route.
// Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.
// NOTE: Each rider travels as far as he can, but never more than 100 miles.

//Pseudocode:
// Initialize a variable to keep track of the total distance covered by each rider.
// Iterate through the list of distances between stations.
// Add each distance to the total distance covered by the current rider.
// If the total distance covered exceeds 100 miles, increment the rider count and reset the total distance covered for the next rider.
// Repeat steps 3-4 until you cover all the distances between stations.
// Return the total number of riders needed.

function riders(stations) {
    let totalDistance = 0;
    let riderCount = 1;
    for (let i = 0; i < stations.length; i++) {
      totalDistance += stations[i]; 
      if (totalDistance > 100) {
        riderCount++;
        totalDistance = stations[i];
      }
    } 
    return riderCount;
  }