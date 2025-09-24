class Stack {
  constructor() {
    this.state = [];
  }

  /**
   * Pushes an item onto the top of the stack.
   */
  push(item) {
    return this.state.unshift(item);
  }

  /**
   * Remove an item at the top of the stack.
   */
  pop() {
    return this.state.shift();
  }

  /**
   * Determines if the stack is empty.
   */
  isEmpty() {
    return this.state.length === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   */
  peek() {
    return this.state[0];
  }

  /**
   * Returns the number of items in the stack.
   */
  length() {
    return this.state.length;
  }
}

module.exports = { Stack };