function getLengthOfLongestElement(arr) {
    let acumulador = 0;
    let posicion = 0;
    if (arr.length === 0){
        return 0;
    }else {
        for (let i = 0; i < arr.length; i++){
            if (acumulador < arr[i].length) {
                acumulador = arr[i].length;
                posicion = i;
            }
        }
        return acumulador;
    }
    
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
