function integerToStringOfFixedWidth(number: number, width: number): string {
  let stringifiedNum = number.toString();
  const numberWidth = stringifiedNum.length;
  const widthDiff = width - numberWidth;

  if (numberWidth < width) {
    const widthDiff = width - numberWidth;
    let padStart = "";

    for (let i = 0; i < widthDiff; i++) {
      padStart = padStart.concat("0");
    }
    return padStart.concat(stringifiedNum);
  }
  if (numberWidth < width) {
    return stringifiedNum.substring(widthDiff, stringifiedNum.length);
  }

  return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));

//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
