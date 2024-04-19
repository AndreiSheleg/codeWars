function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0;
  let current = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  return count;
}

function count(head, target) {
  let count = 0;
  let current = head;

  while (current !== null) {
    if (current.data === target) {
      count++;
    }
    current = current.next;
  }

  return count;
}
