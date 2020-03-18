// remove duplicates from an array
// Sol-1
// Do I need to remove only the duplicates like [1, 2, 5, 8]
// Do I need to preserve the order of the array. [1, 2, 5, 8] / [8, 5, 2, 1]
let a = [1, 2, 5, 2, 1, 8];
//Brute force algorithm
// Take a separate array and push the unique values in it.
let b = [];
let len = a.length;

// This recalculates the length of a in every iteration, that's expensive.
/* for(let i 0; i < a.length;) {

} */

for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}
console.log(b);
// Complexity is O(n2) because for the length of the array we are trying to go through the entire length again, because we checking again b to see if the number is there. So its n2 which is kind of highest.

// Sol-2
let a1 = [1, 2, 5, 2, 1, 8];
let b1 = [];
let len1 = a1.length;

a1.sort(); // quick sort complexity is log(n)
let _temp;
for (let i = 0; i < len1; i++) {
  if (a1[i] !== _temp) {
    b1.push(a1[i]);
    _temp = a1[i];
  }
}
console.log(b1);
// quick sort complexity is log(n), then you have to go through each element so its +n, so its much less than log(n2)

// Sol-3
// Complexity is n
let a2 = [1, 2, 5, 2, 1, 8];
obj = {};

for (let i of a) {
  obj[i] = true;
}

// here .map(Number) converts the array of Strings to array of Numbers
let b2 = Object.keys(obj).map(Number);
console.log(b2);

// Sol-4

let a3 = [1, 2, 5, 2, 1, 8];
// The below code will return a set
/* let bSet = new Set(a3);
console.log(bSet); */

// Using spread operator of ES6
console.log([...new Set(a3)]);
