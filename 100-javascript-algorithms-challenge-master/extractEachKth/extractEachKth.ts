function extractEachKth(inputArray: number[], k: number): number[] {
  return inputArray.filter((element, index) => (index + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
