let name = {
  fname: "Soubhagya",
  lname: "Mishra"
};

let name2 = {
  fname: "Mathew",
  lname: "Hyden"
};

let name3 = {
  fname: "Robert",
  lname: "Downey Jr"
};

let printName = function(hometown, state, country) {
  console.log(
    this.fname +
      " " +
      this.lname +
      ", " +
      hometown +
      ", " +
      state +
      ", " +
      country
  );
};

printName.call(name, "Bhubaneswar", "Odisha", "India");
printName.apply(name2, ["Kingaroy", "Perth", "Australia"]);

let printMyName = printName.bind(name3, "Malebu", "California");
printMyName("United States");
