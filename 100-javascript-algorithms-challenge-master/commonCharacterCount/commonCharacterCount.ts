function commonCharacterCount(s1: string, s2: string): number {
  const s1Chars: string[] = s1.split("");
  const s21Chars: string[] = s2.split("");
  const s1CharCount = getCharList(s1Chars);
  const s2CharCount = getCharList(s2Chars);
  let total = 0;
  for (const prop in s1CharCount) {
    if (s2CharCount.hasOwnProperty(prop)) {
      if (s2CharCount[prop] < s1CharCount[prop]) {
        total += s2CharCount[prop];
      } else {
        total += s1CharCount[prop];
      }
    }
  }
  return total;
}
function getCharList(chars: string[]): object {
  const wordCount = {};
  for (let i = 0; i < chars.length; i++) {
    if (wordCount.hasOwnProperty(chars[i])) {
      wordCount[char[i]]++;
    } else {
      wordCount[chars[i]] = 1;
    }
  }
  return wordCount;
}

console.log(commonCharacterCount("aabcc", "adcaa"));

//The split() method is used to split a string into an array of substrings, and returns the new array.
//The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
