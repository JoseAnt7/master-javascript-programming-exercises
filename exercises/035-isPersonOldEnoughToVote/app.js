function isPersonOldEnoughToVote(person) {
  let edad = person.age;

  if (edad >= 18){
    return true;
  }else {
    return false;
  }
  
}

let obj = {
  age: 19
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true