function pigLatin(str: string): string {
  const letters = str.split("");
  const vowelRegex = /[aeiou]/;
  if (vowelRegex.test(str[0])) {
    return `${str}way`;
  }
  while (true) {
    if (!vowelRegex.test(letters[0])) {
      letters.push(letters.splice(0, 1)[0]);
    } else {
      break;
    }
  }

  str = letters.join("") + "ay";

  return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

//The test() method tests for a match in a string.
//Regular expressions are patterns used to match character combinations in strings.

//Solution #1
// function pigLatin(str: string): string {
//     const letters = str.split("");
//     const vowelRegex = /[aeiou]/;
//     if (vowelRegex.test(letters[0])) {
//       return letters.join("") + "way";
//     }
//     return str;
//   }

//   console.log(pigLatin("glove"));
//   console.log(pigLatin("eight"));

//Solution #2
// function pigLatin(str: string): string {
//     const letters = str.split("");
//     const vowelRegex = /[aeiou]/;
//     if (vowelRegex.test(str[0])) {
//       return str + "way";
//     }
//     return str;
//   }

//   console.log(pigLatin("glove"));
//   console.log(pigLatin("eight"));
