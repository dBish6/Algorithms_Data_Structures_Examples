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

class DoublyLinkedList {
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
   * @returns {DoublyLinkedList}
   */
  push(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;

      this.tail = node;
    }

    this.length++;
    return this;
  }

  /**
   * Removes a node at the end.
   *
   * O(1) Time
   * @returns {DoublyLinkedList | undefined}
   */
  pop() {
    if (!this.head) return undefined;

    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;

    this.length--;
    return this;
  }

  /**
   * Removes a node from the beginning.
   *
   * O(1) Time
   * @returns {DoublyLinkedList | undefined}
   */
  shift() {
    if (!this.head) return undefined;

    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;

    this.length--;
    return this;
  }

  /**
   * Adds a node to the beginning.
   *
   * O(1) Time
   * @param val
   * @returns {DoublyLinkedList}
   */
  unshift(val) {
    const node = new Node(val);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;

      this.head = node;
    }

    this.length++;
    return this;
  }

  /**
   * Get a node at a certain index. Also, splits the list in half when searching for the node, so technically O(n/2) time.
   *
   * O(n) Time
   * @param index
   * @returns {node | undefined}
   */
  get(index) {
    if (this.#isValidIndex(index)) {
      let count, current;

      if (index <= this.length / 2) {
        // Forwards
        count = 0;
        current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
      } else {
        // Backwards
        count = this.length - 1;
        current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
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
   * @returns {DoublyLinkedList | undefined}
   */
  insert(val, index) {
    if (this.#isValidIndex(index)) {
      if (index === 0) return this.unshift(val);
      else if (index === this.length) return this.push(val);

      const newNode = new Node(val),
        target = this.get(index);

      newNode.prev = target.prev;
      newNode.next = target;

      target.prev.next = newNode;
      target.prev = newNode;

      this.length++;
      return this;
    }
  }

  /**
   * Removes a node at a specific position.
   *
   * O(n) OR O(1) Time for removing at the head and tail.
   * @param {number} index The index of the node to remove.
   * @returns {DoublyLinkedList | undefined}
   */
  remove(index) {
    if (this.#isValidIndex(index)) {
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      const target = this.get(index);
      target.prev.next = target.next;
      target.next.prev = target.prev;

      target.next = null;
      target.prev = null;

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
    let current = this.head;

    this.head = this.tail;
    this.tail = current;
    while (current) {
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
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

module.exports = DoublyLinkedList;
