//n some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. 
// Since we cannot define keywords in Javascript, your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behavior described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

function xor(a, b) {
    return a !== b;
  }