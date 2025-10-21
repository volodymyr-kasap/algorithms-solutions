
const { hasCycle } = require('./index');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createLinkedList(values, pos) {
  if (!values.length) return null;

  const nodes = values.map(v => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos];
  }
  return nodes[0];
}

describe('hasCycle', () => {
  test('returns false for empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });

  test('returns false for single node without cycle', () => {
    const node = new ListNode(1);
    expect(hasCycle(node)).toBe(false);
  });

  test('returns true for single node pointing to itself', () => {
    const node = new ListNode(1);
    node.next = node;
    expect(hasCycle(node)).toBe(true);
  });

  test('returns false for list without cycle', () => {
    const head = createLinkedList([3, 2, 0, -4], -1);
    expect(hasCycle(head)).toBe(false);
  });

  test('returns true for list with cycle (tail connects to index 1)', () => {
    const head = createLinkedList([3, 2, 0, -4], 1);
    expect(hasCycle(head)).toBe(true);
  });

  test('returns true for list with cycle (tail connects to head)', () => {
    const head = createLinkedList([1, 2, 3], 0);
    expect(hasCycle(head)).toBe(true);
  });
});