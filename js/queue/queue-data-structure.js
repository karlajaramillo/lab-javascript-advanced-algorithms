class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    return this.queueControl >= this.MAX_SIZE
    ? false // it is full --> 10 and greater 
    : true; // less than 10
  }

  isEmpty() {
    return this.queueControl.length > 0 
    ? false // it has more than one item
    : true // it's empty
  }

  //Queue Overflow --> try to add an element into a queue that is already full.
  enqueue(item) {
    if (this.canEnqueue()) {
      this.queueControl.push(item);
      return this.queueControl;
    } 
    throw new Error('QUEUE_OVERFLOW');
  }

  //Queue Underflow --> get an element from an empty queu
  dequeue() {
    if (!this.isEmpty()) { // it's not empty
      //remove the first element in the queue
      return this.queueControl.shift();
    }
    throw new Error('QUEUE_UNDERFLOW');
  }

  display() {
    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
