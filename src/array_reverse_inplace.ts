function reverseArrayInPlace(arr: any[]): void {
    let start: number = 0;
    let end: number = arr.length - 1;

    while (start < end) {
        let temp: any = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

const myArray: number[] = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(myArray);

console.log("Reversed Array In-Place:", myArray);