// Better than arrays for insertion, that's pretty much it.

/**
 * @typedef {Object} node
 * @property {any} val - The value of the node.
 * @property {node | null} next - Reference to the next node.
 */

/**
 * Represents a node in a singly linked list.
 *
 * @implements {node}
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  #isValidIndex = (index) =>
    typeof index === "number" && index >= 0 && index < this.length;

  /**
   * Adds a new node at the end.
   *
   * O(1) Time
   * @param val
   * @returns {SinglyLinkedList}
   */
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  /**
   * Sets the tail to the node behind it; removes a node at the end.
   *
   * O(n) Time
   * @returns {SinglyLinkedList | undefined}
   */
  pop() {
    if (this.length === 0) return undefined;
    let current = this.head,
      prev = current;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return this;
  }

  /**
   * Sets the head to the node after it; removes a node from the beginning.
   *
   * O(1) Time
   * @returns {SinglyLinkedList | undefined}
   */
  shift() {
    if (this.length === 0) return undefined;

    this.head = this.head.next;

    this.length--;
    if (this.length === 0) this.tail = null;

    return this;
  }

  /**
   * Adds a node to the beginning.
   *
   * O(1) Time
   * @param val
   * @returns {SinglyLinkedList}
   */
  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  /**
   * Get a node at a certain index.
   *
   * O(n) Time
   * @param index
   * @returns {node | undefined}
   */
  get(index) {
    if (this.#isValidIndex(index)) {
      let i = 0,
        current = this.head;

      while (i !== index) {
        current = current.next;
        i++;
      }

      return current;
    }
  }

  /**
   * Get head node; the first node.
   *
   * O(1) Time
   * @returns {node}
   */
  getHead() {
    return this.head;
  }

  /**
   * Get tail node; the last node.
   *
   * O(1) Time
   * @returns {node}
   */
  getTail() {
    return this.tail;
  }

  /**
   * Set a value of a node base on a index.
   *
   * O(n) Time
   * @param val Your new value.
   * @param {number} index The index of the node to change.
   * @returns {node | undefined}
   */
  set(val, index) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return node;
    }
  }

  /**
   * Add a node at a specific position.
   *
   * O(n) OR O(1) Time for inserting at the head and tail.
   * @param val Your new value.
   * @param {number} index The index of the node to change.
   * @returns {SinglyLinkedList | undefined}
   */
  insert(val, index) {
    if (this.#isValidIndex(index)) {
      if (index === 0) return this.unshift(val);
      else if (index === this.length) return this.push(val);

      const newNode = new Node(val),
        prev = this.get(index - 1);

      newNode.next = prev.next;
      prev.next = newNode;

      this.length++;
      return newNode;
    }
  }

  /**
   * Removes a node at a specific position.
   *
   * O(n) OR O(1) Time for removing at the head and tail.
   * @param {number} index The index of the node to remove.
   * @returns {SinglyLinkedList | undefined}
   */
  remove(index) {
    if (this.#isValidIndex(index)) {
      if (index === 0) this.shift();
      if (index === this.length - 1) this.pop();

      const prev = this.get(index - 1);
      prev.next = prev.next.next;

      this.length--;
      return this;
    }
  }

  /**
   * Flips the list backwards.
   *
   * O(n) Time
   * @returns {SinglyLinkedList | undefined}
   */
  reverse() {
    if (this.length === 0) return undefined;
    let current = this.head,
      next,
      prev = null;

    this.head = this.tail;
    this.tail = current;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  /**
   * Returns all linked list values in an array.
   *
   * O(n) Time
   * @returns {Array<any>}
   */
  values() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    return arr;
  }
}

module.exports = SinglyLinkedList;
