/**
 * Represents a node from a singly linked list.
 *
 * @property {any} val - The value of the node.
 * @property {node | null} next - Reference to the next node.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * A queue class that uses a singly linked list.
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Adds an element at beginning of the queue and returns the length.
   *
   * O(1) Time
   * @param val
   * @returns {number}
   */
  enqueue(val) {
    const node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return this.length++;
  }

  /**
   * Removes the first element in queue and returns it.
   *
   * O(1) Time
   * @returns {any | undefined}
   */
  dequeue() {
    if (!this.first) return undefined;
    const temp = this.first;

    if (this.first === this.last) this.last = null;
    this.first = this.first.next;

    this.length--;
    return temp.val;
  }

  /**
   * Returns the value of the first element in the queue without removing it.
   *
   * O(1) Time
   * @returns {any | undefined} The value of the first element or undefined if the queue is empty.
   */
  peek() {
    return this.first?.val;
  }

    /**
   * Returns the value of the last element in the queue without removing it.
   *
   * O(1) Time
   * @returns {any | undefined} The value of the last element or undefined if the queue is empty.
   */
  peekLast() {
    return this.last?.val
  }
}

module.exports = Queue;
