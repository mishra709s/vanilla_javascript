//#1 Solution

// function differentSymbolsNaive(s: string): number {
//   const uniqueChars: string[] = [];
//   const inputChars: string[] = s.split("");

//   inputChars.forEach(char => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });

//   return uniqueChars.length;
// }

// console.log(differentSymbolsNaive("cabca"));

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//The split() method is used to split a string into an array of substrings, and returns the new array.
//The push() method adds new items to the end of an array, and returns the new length.

//#2 Solution
// function differentSymbolsNaive(s: string): number {
//   const uniqueChars = {};
//   const inputChars; = s.split('');
//   inputChars.forEach((char) => {
//       uniqueChars[char] = 1;
//   });

//   return Object.keys(uniqueChars).length;
// }

// console.log(differentSymbolsNaive("cabca"));

// #3 Solution
function differentSymbolsNaive(s: string): number {
  const uniqueChars = new Set();
  const inputChars = s.split("");

  inputChars.forEach(char => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));

//The Set object lets you store unique values of any type, whether primitive values or object references.
