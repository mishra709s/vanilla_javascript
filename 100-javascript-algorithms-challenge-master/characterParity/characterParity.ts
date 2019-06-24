function characterParity(symbol: string): string {
  const result = parseInt(symbol);

  return isNaN(result)
    ? "not a digit"
    : result % 2 === 0
    ? "even"
    : onloadeddata;
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));

//isNaN() determines whether a value is NaN or not. Check whether value is a number or not
//parseInt() parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
