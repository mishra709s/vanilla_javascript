let name = {
  fname: "Soubhagya",
  lname: "Mishra"
};

let printName = function(hometown, state, country, pin) {
  console.log(
    this.fname +
      " " +
      this.lname +
      ", " +
      hometown +
      ", " +
      state +
      ", " +
      country +
      ", " +
      pin
  );
};

let printMyName = printName.bind(name, "Bhubaneswar", "Odisha", "123456");
printMyName("India");

Function.prototype.myBind = function(...args) {
  let obj = this,
    params = args.slice(1); // Will remove the first element from the list and will return us all the elements
  return function(...args2) {
    //obj.call(args); // We can't pass an an as a second argument to the call(), so call() is replace with the apply();
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Bhubaneswar", "Odisha");
printMyName2("234517", "India");

fetch("https://flipkart-mock-product.now.sh")
  .then(res => res.json())
  .then(data => console.log(data));
