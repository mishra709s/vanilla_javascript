let name = {
  fname: "Soubhagya",
  lname: "Mishra",
  fullName: function() {
    console.log(this.fname + " " + this.lname);
  }
};

let name2 = {
  fname: "Robert",
  lname: "Downey"
};

let name3 = {
  fname: "Sachin",
  lname: "Tendulkar"
};

let printFullName = function(hometown, state) {
  console.log(
    this.fname + " " + this.lname + " from " + hometown + ", " + state
  );
};

printFullName.call(name, "Bhubaneswar", "Odisha");
printFullName.call(name2, "Malibu", "California");

printFullName.apply(name, ["Bhubaneswar", "Odisha"]);

let printMyName = printFullName.bind(name3, "Mumbai", "Maharastra");
console.log(printMyName);

printMyName();
