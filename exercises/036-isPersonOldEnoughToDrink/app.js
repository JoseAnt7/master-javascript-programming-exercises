function isPersonOldEnoughToDrink(person) {
  let edad = person.age;
  if (edad >= 21){
    return true;
  }else {
    return false;
  }
  
}

let obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false