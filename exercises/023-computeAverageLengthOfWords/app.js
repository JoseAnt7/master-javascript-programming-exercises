// Write your function here
function computeAverageLengthOfWords(word1, word2) {
    let promedio = (word1.length + word2.length)/2;
    return promedio;
}

let output = computeAverageLengthOfWords('code', 'programs');
console.log(output);