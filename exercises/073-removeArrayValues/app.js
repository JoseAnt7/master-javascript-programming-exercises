function removeArrayValues(obj) {
    // your code here
    for(let keys in obj){
        if (Array.isArray(obj[keys])) {
            delete obj[keys];
        }
    }
    return obj;
}
let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }