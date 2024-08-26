/**
 * A `hash table` using `Separate Chaining`.
 */
class HashTableChaining {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Adds or updates a key-value pair in the hash table. If the key already exists, 
   * the value is overridden.
   *
   * O(1) Time on average, O(n) in the worst case.
   * @param {string} key The key to be hashed and stored.
   * @param {any} value The value associated with the key.
   */
  set(key, value) {
    const index = this.#hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } else {
      // Overrides previous value.
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index][i][1] = value;
          return;
        }
      }
    }

    this.keyMap[index].push([key, value]);
  }

  /**
   * Retrieves the value associated with the given key.
   *
   * O(1) Time on average, O(n) in the worst case.
   * @param {string} key The key to look up.
   * @returns {any} The value associated with the key, or `undefined` if not found.
   */
  get(key) {
    const index = this.#hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  /**
   * Returns an `iterable` of all the keys in the hash table.
   * 
   * O(n) Time
   * @yields Each key in the hash table.
   */
  *keys() {
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          yield this.keyMap[i][j][0];
        }
      }
    }
  }

  /**
   * Returns an `iterable` of all the values in the hash table.
   * 
   * O(n) Time
   * @yields Each value in the hash table.
   */
  *values() {
    const yielded = new Set();

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const value = this.keyMap[i][j][1];
          if (!yielded.has(value)) {
            yielded.add(value);
            yield value;
          }
        }
      }
    }
  }

  /**
   * Hashes the key to produce a valid index in the key map.
   *
   * O(k) Time, where k is the length of the key.
   * @param {string} key The key to be hashed.
   * @returns {number} Index to a key.
   */
  #hash(key) {
    let total = 0;
    const PRIME = 31; // Helps to reduce collisions and distribute keys uniformly.

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i],
        value = char.charCodeAt(0) - 96; // Gives the alphabetic position (- 96).
      total = (total * PRIME + value) % this.keyMap.length; // Gives a valid array index.
    }

    return total;
  }
}

module.exports = HashTableChaining;
