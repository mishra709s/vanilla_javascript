/* Stack is a linear data structure similar to Queue except which follow particular order of operations 
  - LIFO (Last In First Out)
  - Time compexity for Stack:
    Access θ(n)
    Search θ(n)
    Insertion O(1)
    Deletion O(1)
*/

function createStack() {
  var stack = [];
  return {
    push(value) {
      return stack.push(value);
    },
    peek() {
      return stack[stack.length - 1];
    },
    pop() {
      return stack.pop();
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  };
}

function grandChild() {
  return "GrandChild function executed.";
}

var callStack = createStack();
console.log(callStack.isEmpty());

callStack.push("function parent() {}");
callStack.push("function child() {}");
callStack.push(grandChild());

console.log(callStack.peek()); // Will execute grandChild() i.e GrandChild function executed.
/* Function grandChild() is finished executing, so call stack will remove the function from the Stack. */

console.log(callStack.length);
