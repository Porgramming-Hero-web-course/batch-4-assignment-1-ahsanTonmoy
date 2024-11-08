// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// create func to sumofArray
function sumArray(numbers: number[]): number {
    let sum = 0;
    for (let number of numbers) {
        sum += number; 
    }
    return sum; 
}

// console.log(sumArray([1, 2, 3, 4, 5])); //check function are working or not