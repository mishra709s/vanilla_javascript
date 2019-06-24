function fermactor(n: number): number[] {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
      const total = Math.pow(i, 2) - Math.pow(j, 2);
      //   const total = i ** 2 - j ** 2; (ES7 version)

      if (total === n) {
        return [i, j];
      }
    }
  }
}

console.log(fermactor(15));

//The Math.pow() function returns the base to the exponent power, that is, baseexponent.
