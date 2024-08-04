class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  /**
   * Adds a new value.
   *
   * O(log n) Time
   * @param {number} val
   * @returns {Array<number>}
   */
  insert(val) {
    this.values.push(val);
    return this.#heapifyUp();
  }

  /**
   * Removes the max value within the heap.
   *
   * O(log n) Time
   * @param val
   * @returns {Array<number> | undefined}
   */
  extractMax() {
    const max = this.values[0],
      end = this.values.pop();

    if (this.values.length) {
      this.values[0] = end;
      this.#heapifyDown(); // Sorts end which is now the parent.
    }

    return max;
  }

  /**
   * Moves the newly added value up the heap to ensure that the parent nodes are always larger than their child nodes.
   *
   * O(log n) Time
   * @returns {Array<number>}
   */
  #heapifyUp() {
    let i = this.values.length - 1;

    while (i > 0) {
      const parentIndex = Math.floor((i - 1) / 2);
      if (this.values[i] <= this.values[parentIndex]) break;

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
      let maxValue = i;
      const leftChildIndex = 2 * i + 1,
        rightChildIndex = 2 * i + 2;

      if (leftChildIndex < length || rightChildIndex < length) {
        if (this.values[leftChildIndex] > this.values[maxValue]) i = leftChildIndex;
        if (this.values[rightChildIndex] > this.values[maxValue]) i = rightChildIndex;
      }

      if (i === maxValue) break;

      [this.values[i], this.values[maxValue]] = [this.values[maxValue], this.values[i]];
      i = maxValue; // Moves down to the largest child.
    }

    return this.values;
  }
}

module.exports = MaxBinaryHeap;
