class ListNode {
  constructor (val, next = null ) {
    this.val = val;
    this.next = next;
  }
}


function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

module.exports = { reverseList, ListNode };