function checkPalindrome(inputString: string): boolean {
  const originalWord = inputString.toLowerCase();
  const reversedWord = originalWord
    .split("")
    .reverse()
    .join("");

  return originalWord === reversedWord;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abac"));
console.log(checkPalindrome("a"));

//The split() method is used to split a string into an array of substrings, and returns the new array.
//The join() method joins the elements of an array into a string, and returns the string.
