function minesweeper(matrix: boolean[][]): number[][] {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const chars = str.split("");
  if (chars[0] !== "a") {
    return undefined;
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);
