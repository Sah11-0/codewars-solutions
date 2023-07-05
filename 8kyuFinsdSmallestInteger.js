//Given an array of integers your solution should find the smallest integer.
//You can assume, for the purpose of this kata, that the supplied array will not be empty

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[0];
      for (let i = 1; i < args.length; i++) {
        if (args[i] < smallest) {
          smallest = args[i];
        }
      }
      return smallest;
    }
  }

  //or

  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }