function properNounCorrection(noun: string): string {
  const firstChar = noun[0].toUpperCase();
  const restOfWord = noun.slice(1, noun.length).toLowerCase();

  return firstChar.concat(restOfWord);
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));

//The slice() method returns the selected elements in an array, as a new array object.
