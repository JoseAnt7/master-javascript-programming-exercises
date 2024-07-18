function getElementsUpTo(array, n) {
  // your code here
  let elementos = array.slice(0, n);
  return elementos;
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
