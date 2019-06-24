function isLucky(n: number): boolean {
  const luckyN = n.toString();
  const half = luckyN.length / 2;
  const firstHalf = getTotal(luckyN.substring(0, half));
  const secondHalf = luckyN
    .substring(0, half)
    .split("")
    .map(char => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

function getTotal(n: string, half: number) {
  return n
    .substring(0, half)
    .split("")
    .map(char => parseInt(char))
    .reduce((num1, num2) => num1 + num2);
}

console.log(isLucky(1230));
console.log(isLucky(239017));
