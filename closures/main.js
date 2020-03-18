function addNumbers(fnum, snum) {
  var returnValue = "Result Is :";
  function add() {
    return `${returnValue} ${fnum + snum}`;
  }
  return add();
}
var result = addNumbers(10, 20);
console.log(result);

/* 
  var myFunc = addNumbers(10,20); // Going to return the inner function expression
  var result = myFunc();
  document.write(result);
*/

/* 
  return add;
}
var result = addNumber(10,20)();
document.write(result);
*/

function outerFunction(outerVariable) {
  const outer2 = "Hi!";
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable : ${outerVariable}`);
    console.log(`Inner Variable : ${innerVariable}`);
    console.log(outer2);
  };
}

/* const oF = outerFunction("Outer");
console.log(oF("Inner")); */

const newFunction = outerFunction("Outer");
newFunction("Inner");
