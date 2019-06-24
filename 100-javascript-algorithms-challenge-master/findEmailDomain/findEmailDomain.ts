function findEmailDomain(address: string): string {
  const lastAtIndex = address.lastIndexOf("@");

  return address.slice(lastAtIndex + 1, address.length);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));

//The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
//The splice() method adds/removes items to/from an array, and returns the removed item(s).
