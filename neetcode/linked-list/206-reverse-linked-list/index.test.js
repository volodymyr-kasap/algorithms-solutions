const { ListNode,reverseList } = require('./index');

function listToArray(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

function buildList(values) {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let current = head;
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }
  return head;
}

describe('reverseList', () => {
  test('should reverse a list of multiple nodes', () => {
    const head = buildList([1, 2, 3]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([3, 2, 1]);
  });

  test('should handle single node list', () => {
    const head = buildList([1]);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([1]);
  });

  test('should handle empty list', () => {
    const reversed = reverseList(null);
    expect(reversed).toBeNull();
  });

  test('should reverse long list correctly', () => {
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const head = buildList(values);
    const reversed = reverseList(head);
    expect(listToArray(reversed)).toEqual([...values].reverse());
  });
});