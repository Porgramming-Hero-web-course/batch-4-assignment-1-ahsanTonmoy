//Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

//define function for countWordOccurrences
function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase(); // convert sentence to lower case
    const lowerCaseWord = word.toLowerCase();  // convert word to lower case
    const words = lowerCaseSentence.split(" ");
    let count = 0;
    for (let i = 0; i < lowerCaseWord.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }

    return count;
}

// check function are working or not
// console.log(countWordOccurrences('I love Typescrip', 'typescrip'));
