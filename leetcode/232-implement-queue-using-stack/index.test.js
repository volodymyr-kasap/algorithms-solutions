const { MyQueue } = require('./index');

describe('MyQueue (implemented using stacks)', () => {
  let queue;

  beforeEach(() => {
    queue = new MyQueue();
  });

  test('push and peek should work correctly', () => {
    queue.push(1);
    queue.push(2);
    expect(queue.peek()).toBe(1);
  });

  test('pop should return the first pushed element (FIFO)', () => {
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
  });

  test('empty should return true for new queue', () => {
    expect(queue.empty()).toBe(true);
  });

  test('empty should return false after push', () => {
    queue.push(10);
    expect(queue.empty()).toBe(false);
  });

  test('pop should make queue empty if last element removed', () => {
    queue.push(99);
    queue.pop();
    expect(queue.empty()).toBe(true);
  });

  test('peek should not remove element', () => {
    queue.push(5);
    expect(queue.peek()).toBe(5);
    expect(queue.empty()).toBe(false);
  });

  test('push/pop multiple elements (FIFO behavior)', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
    expect(queue.empty()).toBe(true);
  });
});
