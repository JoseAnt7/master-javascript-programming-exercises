function isPersonOldEnoughToDrive(person) {
  let edad = person.age;
  if (edad >= 16){
    return true;
  }else {
    return false;
  }
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true