/* Queue is a 'Linear' data structure which follows particular order.
    - FIFO (First In First Out)
    - Time Complexity for queue:
      Access θ(n)
      Search θ(n)
      Insertion O(1)
      Deletion O(1)
*/
function createQueue() {
  var queue = [];

  return {
    enqueue(value) {
      return enqueue.unshift(value);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  };
}

// Banking queue
var bankQueue = createQueue();

// Goes into the cashier counter
bankQueue.enqueue("A");
bankQueue.enquque("B");
bankQueue.enquque("C");

console.log(bankQueue.length);
