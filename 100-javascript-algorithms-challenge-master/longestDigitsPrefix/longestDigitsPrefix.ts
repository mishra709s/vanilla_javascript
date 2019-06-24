// function longestDigitsPrefix(inputString: string): string {
//   const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   const chars = inputString.split("");
//   const prefix = [];

//   for (let char of inputString) {
//     if (!digits.includes(char)) {
//       break;
//     }
//     prefix.push(char);
//   }
//   return prefix.join("");
// }

// console.log(longestDigitsPrefix("123aa1"));

// function longestDigitsPrefix(inputString: string): string {
//   const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   const chars = inputString.split("");
//   let prefix = "";

//   for (let char of inputString) {
//     if (!digits.includes(char)) {
//       break;
//     }
//     prefix += chars;
//   }
//   return prefix;
// }

// console.log(longestDigitsPrefix("123aa1"));

function longestDigitsPrefix(inputString: string): string {
  const num = parseInt(char);
  const chars = inputString.split("");
  for (let char of inputString) {
    if (isNaN(num)) {
      break;
    }
    prefix += chars;
  }
  return prefix;
}

console.log(longestDigitsPrefix("123aa1"));
