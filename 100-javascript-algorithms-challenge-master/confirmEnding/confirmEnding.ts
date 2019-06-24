function confirmEnding(str: string, target: string) {
  const start = str.length - target.length;

  return str.substr(start, str.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));

//The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
