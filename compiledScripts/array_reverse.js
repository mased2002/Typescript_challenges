"use strict";
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray); // Output: Original Array: [1, 2, 3, 4, 5]
console.log("Reversed Array:", reversedArray); // Output: Reversed Array: [5, 4, 3, 2, 1]
