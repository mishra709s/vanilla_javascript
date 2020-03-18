// Function Currying using bind()
let multiply = function(x, y) {
  console.log(`Multiplication of ${x} and ${y} using bind: ${x * y}`);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(7); // 14

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(7); // 21

let multiplyByFour = multiply.bind(this);
multiplyByFour(4, 7); // 28

let multiplyByFive = multiply.bind(this, 5, 8);
multiplyByFive(7); // 40

// Function Currying using closure
let closure_mul = function(x) {
  return function(y) {
    console.log(`Multiplication of ${x} and ${y} using closure: ${x * y}`);
  };
};

let multiplyBy2 = closure_mul(2);
multiplyBy2(3); // 6

let multiplyBy9 = closure_mul(9);
multiplyBy9(9); // 81
