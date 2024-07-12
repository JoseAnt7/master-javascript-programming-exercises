function isOldEnoughToDrive(age) {
  if (age < 16){
    return false;
  }else {
    return true;
  }
}

let output = isOldEnoughToDrive(22);
console.log(output);
