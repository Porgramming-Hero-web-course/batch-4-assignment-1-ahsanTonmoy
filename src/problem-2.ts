// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// define function to removeDuplicates in arrey
function removeDuplicates (numbers: number[]): number[]{
    const uniqueNumbers: number[] = [];
    const metchedNumber = new Set<number>();
    for(const num of numbers){
        if (!metchedNumber.has(num)) {
            metchedNumber.add(num);
            uniqueNumbers.push(num);

        }
    }
    return uniqueNumbers;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
