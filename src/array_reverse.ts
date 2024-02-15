function reverseArray<T>(arr: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i: number = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = reverseArray(originalArray);

console.log("Original Array:", originalArray); // Output: Original Array: [1, 2, 3, 4, 5]
console.log("Reversed Array:", reversedArray); // Output: Reversed Array: [5, 4, 3, 2, 1]
