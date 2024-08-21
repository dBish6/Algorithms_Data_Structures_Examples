/**
 * @typedef {Object} node
 * @property {any} val The value of the node.
 * @property {1 | 2 | 3 | 4 | 5} priority The priority of the node (1 being the highest priority).
 */

/**
 * @implements {node}
 */
class Node {
    constructor(val, priority) {
      this.val = val;
      this.priority = priority;
    }
  }

/**
 * Represents a priority queue using a min binary heap.
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Adds a new node.
   *
   * O(log n) Time
   * @param {node} val
   * @param {1 | 2 | 3 | 4 | 5} priority
   * @returns {Array<node>}
   */
  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    return this.#heapifyUp();
  }

  /**
   * Removes the node with the lowest priority.
   *
   * O(log n) Time
   * @param val
   * @returns {node | undefined}
   */
  dequeue() {
    const min = this.values[0],
      end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      this.#heapifyDown(); // Sorts min which is now the parent.
    }

    return min;
  }

  /**
   * Moves the newly added value up the heap to ensure that the parent nodes are always smaller than their child nodes.
   *
   * O(log n) Time
   * @returns {Array<node>}
   */
  #heapifyUp() {
    let i = this.values.length - 1;

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i].priority >= this.values[parentIndex].priority) break;

      [this.values[i], this.values[parentIndex]] = [this.values[parentIndex], this.values[i]];
      i = parentIndex; // Moves up to the parent's index.
    }

    return this.values;
  }

  /**
   * Moves the root value down the heap to ensure the heap property is maintained.
   *
   * O(log n) Time
   * @returns {Array<node>}
   */
  #heapifyDown() {
    let i = 0;
    const length = this.values.length;

    while (true) {
      let minValue = i;
      const leftChildIndex = 2 * i + 1,
        rightChildIndex = 2 * i + 2;

      if (leftChildIndex < length || rightChildIndex < length) {
        if (this.values[leftChildIndex].priority < this.values[minValue].priority)
          i = leftChildIndex;
        if (this.values[rightChildIndex]?.priority < this.values[minValue].priority)
          i = rightChildIndex;
      }

      if (i === minValue) break;

      [this.values[i], this.values[minValue]] = [this.values[minValue], this.values[i]];
      i = minValue; // Moves down to the smallest child.
    }

    return this.values;
  }
}

module.exports = PriorityQueue;
