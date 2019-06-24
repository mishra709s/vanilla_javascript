function newNumeralSystem(number: string): string[] {
  const numerals: string[] = [];
  let startCharCount = 65;
  let endCharCount = number.charCodeAt(0);

  while (startCharCount <= endCharCount) {
    const numerals = `${String.fromCharCode(
      startCharCount
    )} + ${String.fromCharCode(endCharCount)}`;
    numerals.push(numeral);
    startCharCount++;
    endCharCount--;
  }

  return numerals;
}

console.log(newNumeralSystem("G"));

//The charCodeAt() method returns the Unicode of the character at the specified index in a string.
