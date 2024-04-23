//Write a function that returns whether it is running in strict mode.

function isInStrictMode() {
    return (function() { return !this; })();
}

//or

function isInStrictMode() {
    return !this;
  }