function convertDoubleSpaceToSingle(str) {
    // your code here
    let newStr = str.replace(/  +/g, ' ');
    return newStr;
    
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
