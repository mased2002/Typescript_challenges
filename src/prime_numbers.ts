function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(numbers: number[]): number[] {
    const primeNumbers: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    return primeNumbers;
}

// Example usage:
const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const primeNumbersArray: number[] = filterPrimes(numbersArray);
console.log(numbersArray , primeNumbersArray)