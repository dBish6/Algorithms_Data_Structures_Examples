/**
 * Represents a node from a singly linked list.
 *
 * @property {any} val The value of the node.
 * @property {node | null} next Reference to the next node.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * A stack class that uses a singly linked list.
 */
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /**
   * Adds an element at the top and returns the length.
   *
   * O(1) Time
   * @param val
   * @returns {number}
   */
  push(val) {
    const node = new Node(val);

    if (!this.top) {
      this.top = node;
      this.bottom = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    return this.length += 1;
  }

  /**
   * Removes the top element from the stack and returns it.
   *
   * O(1) Time
   * @returns {any | undefined}
   */
  pop() {
    if (!this.top) return undefined;
    const temp = this.top;

    if (this.top === this.bottom) this.bottom = null;
    this.top = this.top.next;

    this.length--;
    return temp.val;
  }
}

module.exports = Stack;
