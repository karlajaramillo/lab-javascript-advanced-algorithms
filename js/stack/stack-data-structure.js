class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    return this.stackControl >= this.MAX_SIZE 
    ? false // the stack is full --> 10 and greater 
    : true; // less than 10
  }

  isEmpty() {
    return this.stackControl.length > 0 
    ? false // it has more than one item
    : true // it's empty
  }

  push(item) {
    if (this.canPush()) { // if there is space --> true
      // push item to the stackControl array available in the stack.
      this.stackControl.push(item);
      // return the array
      return this.stackControl;
    } 
    throw new Error('STACK_OVERFLOW');
  }

  pop() {
    // it's empty
    if (!this.isEmpty()) { 
      return this.stackControl.pop(); // remove last item
    }
    throw new Error('STACK_UNDERFLOW');
  }

  display() {
    return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
