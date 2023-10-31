//Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    const mergedSet = new Set(a.concat(b));
    const mergedArray = Array.from(mergedSet).sort((a,b) => a -b);
    return mergedArray;
   }