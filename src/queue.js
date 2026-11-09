const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    function toObject(node) {
      if (node === null) {
        return null;
      } else {
        return {
          value: node.value,
          next: toObject(node.next)
        }
      }
    }
    return toObject(this.head);
  }

  enqueue(value) {
  const elem = new ListNode(value);
  if (this.head === null) {
    this.head = elem;
    this.tail = elem;
  } else {
    this.tail.next = elem;
    this.tail = elem;
  } 
}

  dequeue() {
    if (this.head === null) {
      return undefined; 
    } else {
      const outputValue = this.head.value;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      return outputValue;
    }
  }
}

module.exports = {
  Queue
};
