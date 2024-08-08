// Write your function here
function countAllCharacters(texto) {
    let obj = {};
    if (texto.length === 0){
        return {};
    }
    for (let i = 0; i < texto.length; i++){
        let letra = texto[i];
        if (Object.keys(obj) === 0){
            obj[letra] = 1; 
        }else{
            if (obj.hasOwnProperty(letra)){
                obj[letra]++;
            }else {
                obj[letra] = 1;
            }
        }
    }
    return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}