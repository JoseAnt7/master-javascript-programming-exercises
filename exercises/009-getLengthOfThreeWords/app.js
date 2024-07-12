function getLengthOfThreeWords(word1, word2, word3) {
  let final = word1.length + word2.length + word3.length;
  return final;
  
}

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14
