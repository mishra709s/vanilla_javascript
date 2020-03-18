/* Hoisting Examples */
/* Ex-1 */
/* var num = 10;
function varNum() {
  //var num = 100;
  console.log(`varNum num value ${num}`); //varNum num value undefined 
  var num = 50;
  return num; // 50
}
var def = varNum();// 50
console.log(def);// 50
console.log(`num value ${num}`);// num value 10*/

/* Ex-2 */
/* var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 1*/

/* Ex-2 Behind the scene */
/* var a = 1;
function b() {
  function a() {}
  a = 10;
  return;
}
b();
console.log(a);// Output: 1 */

/* Ex-3 */
/* function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
console.log(foo()); */

/* Ex-3 Behind the scene */
/* function foo() {
  function bar() {
    return 3;
  }
  function bar() {
    return 8;
  }
  return bar();
}
alert(foo()); // Output: 8*/

/* Ex-4 */
/* function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent()); */

/* Ex-4 BEhind the scene */
/* function parent() {
  function hoisted() {
    return "I'm a function";
  }
  var hoisted = "I'm a variable";
  return hoisted();// here hoisted is not a function
}
console.log(parent()); */

/* Ex-5 */
/* console.log(foo());
function foo() {
  var bar = function() {
    return 3;
  };
  return bar();
  var bar = function() {
    return 8;
  };
} */
/* Ex-5 explanation */
/* The function foo() itself will be hoisted in the global scope as its a function declaration. As for inside foo(), its a clear case of function expression for both the bar()functions.

The second bar() will not be read by the interpreter ahead of time (no hoisting). The first one will be executed and returned. */

/* Ex-6 */
/* var myVar = "foo";
(function() {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})(); */

/* Ex-6 Explanation */
/* In this one, again the global value of myVar (‘foo’) is out of the picture.
This is because variable myVar is being declared and defined inside the local function scope and is therefore hoisted to the top of the IIFE(Immediately Invoked Function Expression) with a value of ‘undefined’ which is logged first. The value ‘bar’ is then assigned and logged subsequently. */

/* Ex-7 */
/* function display() {
  function emp() {
    console.log("111");
  }
  emp();
  function emp() {
    console.log("2");
  }
}
console.log(display()); */

/* Ex-8 */
/* var emp = function() {
  console.log("1");
};
emp();
function emp() {
  console.log("2");
}
emp(); */

/* Ex-9 */
/* var x = 5;
console.log(x); // Output: 5
var x; */

/* Ex-10 */
/* var y = 10;
var y;
console.log(y);// Output: 10 */

/* Ex-11 */
/* var y = 10;
var y = 12;
console.log(y);// Output: 12*/

/* Ex-12 */
/* var z = 21;
let z;
console.log(z);// Output: Uncaught SyntaxError: Identifier 'z' has already been declared */

/* Ex-13 */
/* let y = 12;
console.log(y);// Output: Uncaught SyntaxError: Identifier 'z' has already been declared 
var y = 11; */

/* Ex-14 */
/* var a = 5;
console.log(a);// Output: 5
var a = 7;
console.log(a);// Output: 7 */

/* Ex-15 */
/* console.log(y);// Output: Uncaught ReferenceError: w is not defined
y = 15; */

/* Ex-16 */
/* var x = 1;
console.log(x, y);// Output: 1 undefined
var y; */

/* Ex-17 */
/* var x = 1;
console.log(x, y);
var y;
delete x;
delete y;
console.log(x, y); */

/* Ex-18 */
/* x = 1;
console.log(x, y);
var y;
delete x;
delete y;
console.log(x, y); */

console.log(2.0 == "2");
console.log(new Boolean(true));
console.log(new Boolean(true) == "1");

console.log(((2.0 == "2") == new Boolean(true)) == "1");

// Misc
/* function init() {
  var name_234 = "Soubhagya";
  function displayName() {
    console.log(`displayName method name is ${name_234}`);
  }
  displayName();
}
init(); */

/* function makeFun() {
  var name = "Soubhagya";
  function displayName() {
    console.log(`displayName name is ${name}`);
  }
  // return displayName;
}
var myFunc = makeFun();
myFunc(); */

/* Ex - 19
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a); // Accessible as a global variable outside hoist() function Output: 20


console.log(b); // Since it was declared, it is confined to the hoist() function scope. We can't print it out outside the confines of the hoist() function. Output: ReferenceError: b is not defined */

/* Ex - 20
console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';

// We expected the result of the log to be: ReferenceError: hoist is not defined, but instead, its output is undefined.

// JavaScript has hoisted the variable declaration. This is what the code above looks like to the interpreter:

var hoist;
console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';

// Because of this, we can use variables before we declare them. However, we have to be careful because the hoisted variable is initialised with a value of undefined. The best option would be to declare and initialise our variable before use. */

/* Ex - 21;
function hoist() {
  console.log(message);
  var message = "Hoisting is all the rage!";
}

hoist();

// This is how the interpreter views the above code:

function hoist() {
  var message;
  console.log(message);
  message = "Hoisting is all the rage!";
}

hoist(); // Ouput: undefined

// The variable declaration, var message whose scope is the function hoist(), is hoisted to the top of the function.
// To avoid this pitfall, we would make sure to declare and initialise the variable before we use it:

function hoist() {
  var message = "Hoisting is all the rage!";
  return message;
}

hoist(); // Ouput: Hoisting is all the rage! */

/* Ex - 22
// Function declarations
// These are of the following form and are hoisted completely to the top. Now, we can understand why JavaScript enable us to invoke a function seemingly before declaring it.

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log("This function has been hoisted.");
}

// Function expressions
// Function expressions, however are not hoisted.
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log("Will this work?");
};

// Let's try the combination of a function declaration and expression.
expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log("Will this work?");
};

// As we can see above, the variable declaration var expression is hoisted but it's assignment to a function is not. Therefore, the intepreter throws a TypeError since it sees expression as a variable and not a function. */

/* NOTE:
// Order Of Precedence
// It's important to keep a few things in mind when declaring JavaScript functions and variables.
1. Variable assignment takes precedence over function declaration
2. Function declarations take precedence over variable declarations

// Function declarations are hoisted over variable declarations but not over variable assignments.

// Variable assignment over function declaration
var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number

// Function declarations over variable declarations
var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function

// Even if we reversed the position of the declarations, the JavaScript interpreter would still consider double a function. */
