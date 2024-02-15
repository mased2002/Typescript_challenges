"use strict";
function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const myArray = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(myArray);
console.log("Reversed Array In-Place:", myArray);
