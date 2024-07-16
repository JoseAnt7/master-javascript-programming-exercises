// Write your function here
function isOdd(num) {
    if ((num % 3) == 0){
        return true;
    }else {
        return false;
    }
}

let number = 64;
let comp = isOdd(number);
console.log(comp);