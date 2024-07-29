// Write your function here
function findMinLengthOfThreeWords(palabra1, palabra2, palabra3) {
    let number = 0;
    if (palabra1.length < palabra2.length){
        if (palabra1.length < palabra3.length){
            number = palabra1.length;
        }else {
            number = palabra3.length;
        }
    }else {
        if (palabra2.length < palabra3.length){
            number = palabra2.length;
        }else {
            number = palabra3.length;
        }
    }
    return number;
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1