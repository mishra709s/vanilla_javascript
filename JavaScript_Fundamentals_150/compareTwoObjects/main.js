const obj1 = {
  age: 25,
  hair: "long",
  beard: true
};

const obj2 = {
  hair: "long",
  beard: true
};

const matches = (obj, source) =>
  Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

console.log(matches(obj1, obj2));
