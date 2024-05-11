//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
    return array.filter((value, index) => value == 0 || value % index === 0);
  }