function avoidObstacles(inputArray: number[]): number {
  //This will sort the array numerically
  inputArray = inputArray.sort((a, b) => a - b);
  //This will give us our largest value
  const largestArrayVal = inputArray[inputArray.length - 1];

  //Need to start at 1, 0 will cause infinite loop
  for (let i = 1; i < largestArrayVal + 1; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));

//The every() method tests whether all elements in the array pass the test implemented by the provided function.

/* The sort() method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the sort() method sorts the values as strings in alphabetical and ascending order. */
