## When you start writing a lot of DOM events, one of the most important function that you need to learn is Debounce function.

## What is a Debounce Function ?
-> Imagine if you are building a shoping cart, where user has picked a lots of items to purchase and as a last event, the user is clicking on the purchase button, and then the purchase order goes to the server. But what if user clicks on that button exponently twice in a quick succession, does that means, the order will go twice? 

It depends on how you design your system, but you can protect that kind of behaviour using a debounce function.

Debounce function is basically, if we click on the same button multiple times, it would execute the event at the last click.

Ex:- If you have an event on mouse move, where my mouse moves from one point to another, it will keep firing the mouse move event and on every mouse move event, it will fire that event. So what you want to do is, when the mouse starts to move, and as soon as the mouse end, then you need to fire the event.

Similarly if you have a scroll event, you can use debounce to prevent lots of events to get fired.

## Concept of Debounce function
The concept of debounce function is you set a timeout. So on every click the click event won't fire right away. Lets say we have put 2 second as setTimeout, which means after 2 secs, the click event would fire, and in the meantime, if the user clicks on the same button again, that setTimeout gets reset.

-> This function will take 2 args.
1. The function that you want to execute.
2. How much time you want it.

Here, e is the element
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