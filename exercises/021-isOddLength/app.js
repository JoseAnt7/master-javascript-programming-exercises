// Write your function here

function isOddLength(word) {
    let num = word.length;
    if (!(num % 2) == 0){
        return true;
    }else {
        return false;
    }
}

let output = isOddLength('special');
console.log(output); // true