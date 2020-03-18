// Sol -1
function countLetters(str) {
  let tempArr = str.split("");
  let letters = [];
  let count = 1;

  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]} `;
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.join("");
}
console.log(countLetters("ffffeerrtttoo")); //4f 2e 2r 3t 2o

// Sol - 2
/* let counter = str => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};
console.log(counter("aabbhrsssty")); */ //{a: 2, b: 2, h: 1, r: 1, s: 3, t:1, y:1}
