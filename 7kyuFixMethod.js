// Property objMethod should be called by myFunction.Fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.
// IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation.

function myFunction() {
    var myObject = {
      objProperty: "string",
      objMethod: function() {
        return this.objProperty;
          }
    }
    
    return myObject;
  };