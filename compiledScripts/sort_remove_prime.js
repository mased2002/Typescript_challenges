"use strict";
function isSortPrime(num) {
    if (num < 2)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function customSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isSortPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
const inputArray = [5, 3, 8, 2, 7, 4, 11, 6];
const sortedArrayWithoutPrimes = customSort(inputArray);
console.log(sortedArrayWithoutPrimes);
