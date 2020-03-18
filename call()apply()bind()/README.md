call(arg1, arg2, arg3, ...);

call():-
----------
printFullName.call(name2, "Malibu", "California");

-> In this call, the first argument will be the reference, or what we want the this pointing to. Here we want this to be pointing to name2.

-> In Call(), we will pass these arguments individually (Comma separated).

apply():-
------------
printFullName.apply(name2, ["Malibu", "California"]);

-> In apply()we will pass it as 2nd argument as an AttayList.

bind();-
------------
-> bind() method looks exactly as the same as call(), but the only difference is instead of directly calling the method, the bind(), binds the printFullName with the onject and returns us the copy of the method.

let printMyName = printFullName.bind(name3, "Mumbai", "Maharastra");
console.log(printMyName);

printMyName();

-> It will create a copy of printFullName and it will bind that to name2 object and it will return a function.
-> It is typically used to just bind and keep a copy of that method and use it later.
-> The only difference between call() and bind() is the bind() gives you the copy but which can be invoked later rather than directly invoking it whereever we are writing this line of code.