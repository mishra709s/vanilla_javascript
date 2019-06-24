function sumOfTwo(a: number[], b: number[], v: number): boolean {
  const hasMap = {};
  for (let num of a) {
    const difference = v - num;
    hasMap[difference] = difference;
  }

  for (let num of b) {
    if (hasMap.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
