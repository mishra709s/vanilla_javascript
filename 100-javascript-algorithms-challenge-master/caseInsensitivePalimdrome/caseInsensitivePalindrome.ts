function isCaseInsensitivePalindrome(inputString: string): boolean {
  const originalLowerCase = inputString.toLowerCase();
  const reversedWord = originalLowerCase
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  return originalLowerCase === reversedWord;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));

//.reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
//.join()  creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
//toLowerCase() Convert the string to lowercase letters:
//.split() The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
