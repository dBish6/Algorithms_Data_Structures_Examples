/**
 * Same thing as the max binary heap but 'backwards'.
 */
class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Adds a new node.
   *
   * O(log n) Time
   * @param {node} val
   * @returns {Array<node>}
   */
  insert(val) {
    this.values.push(val);
    return this.#heapifyUp();
  }

  /**
   * Removes the min value within the heap.
   *
   * O(log n) Time
   * @param val
   * @returns {node | undefined}
   */
  extractMin() {
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
   * @returns {Array<number>}
   */
  #heapifyUp() {
    let i = this.values.length - 1;

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i] >= this.values[parentIndex]) break;

      [this.values[i], this.values[parentIndex]] = [this.values[parentIndex], this.values[i]];
      i = parentIndex; // Moves up to the parent's index.
    }

    return this.values;
  }

  /**
   * Moves the root value down the heap to ensure the heap property is maintained.
   *
   * O(log n) Time
   * @returns {Array<number>}
   */
  #heapifyDown() {
    let i = 0;
    const length = this.values.length;

    while (true) {
      let minValue = i;
      const leftChildIndex = 2 * i + 1,
        rightChildIndex = 2 * i + 2;

      if (leftChildIndex < length || rightChildIndex < length) {
        if (this.values[leftChildIndex] < this.values[minValue])
          i = leftChildIndex;
        if (this.values[rightChildIndex] < this.values[minValue])
          i = rightChildIndex;
      }

      if (i === minValue) break;

      [this.values[i], this.values[minValue]] = [this.values[minValue], this.values[i]];
      i = minValue; // Moves down to the smallest child.
    }

    return this.values;
  }
}

module.exports = MinBinaryHeap;
