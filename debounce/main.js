const debounce = (fn, delay) => {
  let timeoutID;
  return function(...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

document.querySelector("#myId").addEventListener(
  "click",
  debounce(e => {
    console.log("Clicked");
  }, 2000)
);
