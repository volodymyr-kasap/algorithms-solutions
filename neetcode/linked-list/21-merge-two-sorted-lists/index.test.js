// mergeSortedLists.test.js
const { mergeTwoLists } = require('./index');

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function arrayToList(arr) {
  if (!arr.length) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

describe('mergeTwoLists', () => {
  test('merges two non-empty sorted lists', () => {
    const l1 = arrayToList([1, 2, 4]);
    const l2 = arrayToList([1, 3, 4]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test('merges when first list is empty', () => {
    const l1 = null;
    const l2 = arrayToList([0]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([0]);
  });

  test('merges when second list is empty', () => {
    const l1 = arrayToList([2, 5, 7]);
    const l2 = null;
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([2, 5, 7]);
  });

  test('merges two empty lists', () => {
    const merged = mergeTwoLists(null, null);
    expect(listToArray(merged)).toEqual([]);
  });

  test('merges lists with negative numbers', () => {
    const l1 = arrayToList([-3, -1, 2]);
    const l2 = arrayToList([-2, 0, 3]);
    const merged = mergeTwoLists(l1, l2);
    expect(listToArray(merged)).toEqual([-3, -2, -1, 0, 2, 3]);
  });
});
