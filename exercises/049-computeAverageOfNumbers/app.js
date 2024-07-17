// Write your function here
function computeAverageOfNumbers(array) {

    if (array.length == 0){
        return 0;
    }else {
        let num = 0;
        for (let i = 0; i < array.length; i++){
            num += array[i];
        }
        num = num / array.length;
        
        return num;
    }

}

let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3