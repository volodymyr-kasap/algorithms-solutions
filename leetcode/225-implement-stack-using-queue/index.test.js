const { MyStack } = require('./index');

describe('MyStack (two queues, valid queue ops only)', () => {
  let stack;

  beforeEach(() => {
    stack = new MyStack();
  });

  test('push and top should work correctly', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.top()).toBe(2);
  });

  test('pop should return the last pushed element', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test('empty should return true for new stack', () => {
    expect(stack.empty()).toBe(true);
  });

  test('empty should return false after push', () => {
    stack.push(10);
    expect(stack.empty()).toBe(false);
  });

  test('top should not remove element', () => {
    stack.push(5);
    expect(stack.top()).toBe(5);
    expect(stack.empty()).toBe(false);
  });

  test('pop should make stack empty when last element removed', () => {
    stack.push(99);
    stack.pop();
    expect(stack.empty()).toBe(true);
  });

  test('push/pop multiple elements (LIFO order)', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.empty()).toBe(true);
  });
});
