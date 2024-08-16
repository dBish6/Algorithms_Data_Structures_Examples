/** 
 * Deque
 * Author: @dBish6
 */

/**
 * `Double-ended queue` with a simpler approach; using two front and back arrays.
 */
class Deque {
  constructor() {
    this.front = [];
    this.back = [];
    this.length = 0;
  }

  /**
   * Adds a new element to the front of the deque.
   *
   * O(1) Time
   * @param val The value to add.
   * @returns {Deque}
   */
  enqueueFront(val) {
    this.front.push(val);

    this.length++;
    return this;
  }

  /**
   * Adds a new element to the back of the deque.
   *
   * O(1) Time
   * @param val The value to add.
   * @returns {Deque}
   */
  enqueueBack(val) {
    this.back.push(val);

    this.length++;
    return this;
  }

  /**
   * Removes an element from the front of the deque.
   * 
   * O(1) Time
   * @returns {any | null} The removed element.
   */
  dequeueFront() {
    if (this.front.length === 0) {
      this.front = this.back.reverse();
      this.back = [];
    }

    this.length--;
    return this.front.pop();
  }

  /**
   * Removes an element from the back of the deque.
   * 
   * O(1) Time
   * @returns {any | null} The removed element.
   */
  dequeueBack() {
    if (this.back.length === 0) {
      this.back = this.front.reverse();
      this.front = [];
    }

    this.length--;
    return this.back.pop();
  }

  /**
   * Returns an `iterable` of all elements in the deque.
   * 
   * O(n) Time
   * @yields {any} Each element in the deque.
   */
  *values() { 
    yield* this.front.reverse();
    yield* this.back;
  }
}
