
var MyStack = function() {
  this.q1 = []; // the main queue, always holds the current stack elements (top at the front)
  this.q2 = []; // a temporary helper queue used during push(x)
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q2.push(x);

  // LIFO
  while (this.q1.length > 0) {
    this.q2.push(this.q1.shift());
  }

  const temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q1.length === 0;
};

module.exports = { MyStack };

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */