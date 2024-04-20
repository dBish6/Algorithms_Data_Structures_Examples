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
   * @returns {LinkedList}
   */
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Sets the tail to the node behind it; removes a node at the end.
   *
   * O(n) Time
   * @returns {LinkedList | undefined}
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
   * @returns {LinkedList | undefined}
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
   * @returns {LinkedList}
   */
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  /**
   * Get a node at a curtain index.
   *
   * O(n) Time
   * @param index
   * @returns {Node | undefined}
   */
  get(index) {
    if (this.#isValidIndex(index)) {
      let counter = 0,
        current = this.head;

      while (counter !== index) {
        current = current.next;
        counter++;
      }

      return current;
    }
  }

  /**
   * Get head node; the first node.
   *
   * O(1) Time
   * @returns {Node}
   */
  getHead() {
    return this.head;
  }

  /**
   * Get tail node; the last node.
   *
   * O(1) Time
   * @returns {Node}
   */
  getTail() {
    return this.tail;
  }

  /**
   * Set a value of a node base on it's index.
   *
   * O(n) Time
   * @param val Your new value.
   * @param {number} index The index of the node to change.
   * @returns {Node | undefined}
   */
  set(val, index) {
    if (this.#isValidIndex(index)) {
      const node = this.get(index);
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
   * @returns {LinkedList | undefined}
   */
  insert(val, index) {
    console.log("index < this.length", index < this.length);
    if (this.#isValidIndex(index)) {
      if (index === this.length) {
        return this.push(val);
      } else if (index === 0) {
        return this.unshift(val);
      }
      let newNode = new Node(val),
        prev = this.get(index);

      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;

      return this;
    }
  }

  /**
   * Removes a node at a specific position.
   *
   * O(n) OR O(1) Time for removing at the head and tail.
   * @param {number} index The index of the node to remove.
   * @returns {LinkedList | undefined}
   */
  remove(index) {
    if (this.#isValidIndex(index)) {
      if (index === 0) this.shift();
      if (index === this.length - 1) this.pop();

      const prevNode = this.get(index - 1);
      prevNode.next = prevNode.next.next;
      this.length--;

      return this;
    }
  }

  /**
   * Flips the list backwards.
   *
   * O(n) Time
   * @returns {LinkedList | undefined}
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
