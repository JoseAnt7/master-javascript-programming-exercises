function squareElements(arr) {
  if (arr.length === 0){
    return [];
  }
  let new_arr = [];
  for (let i = 0; i < arr.length; i++){
    let valor = Math.pow(arr[i],2);
    new_arr.push(valor);
  }
  return new_arr;
  
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
