/** 
 * DequeLinkedList
 * Author: @dBish6
 */

/**
 * @typedef {Object} node
 * @property {any} val The value of the node.
 * @property {node | null} next Reference to the next node.
 * @property {node | null} prev Reference to the previous node.
 */

/**
 * Represents a node in a doubly linked list.
 *
 * @implements {node}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * `Double-ended queue` that uses a doubly linked list.
 * 
 * Pretty much a `Doubly Linked List` class minus methods like inserting or removing at arbitrary positions, etc. A Double-ended queue
 * just focuses on efficiently adding and removing elements from both ends.
 */
class DequeLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Adds a new node to the front of the deque.
   *
   * O(1) Time
   * @param val The value to add.
   * @returns {Deque}
   */
  enqueueFront(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.head;

      this.head = node;
    }

    this.length++;
    return this;
  }

  /**
   * Adds a new node to the back of the deque.
   *
   * O(1) Time
   * @param val The value to add.
   * @returns {Deque}
   */
  enqueueBack(val) {
    const node = new Node(val);

    if (!this.tail) {
      this.tail = node;
      this.head = this.tail;
    } else {
      this.tail.next = node;
      node.prev = this.tail;

      this.tail = node;
    }

    this.length++;
    return this;
  }

  /**
   * Removes a node from the front of the deque.
   * 
   * O(1) Time
   * @returns {any | null} The value of the removed node.
   */
  dequeueFront() {
    if (!this.head) return undefined;
    const temp = this.head;

    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.length--;
    return temp.val;
  }

  /**
   * Removes an element from the back of the deque.
   * 
   * O(1) Time
   * @returns {any | null} The value of the removed element.
   */
  dequeueBack() {
    if (!this.head) return undefined;
    const temp = this.tail;

    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.length--;
    return temp.val;
  }

  /**
   * Returns an iterable of all nodes in the deque
   * 
   * O(n) Time
   * @yields {any} The value of each node in the deque.
   */
  *values() {
    let current = this.head;
    while (current) {
      yield current.val;
      current = current.next;
    }
  }
}
