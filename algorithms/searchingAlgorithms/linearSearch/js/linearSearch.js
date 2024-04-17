/**
 * Linear search on an array to find the index of an element.
 *
 * O(n) Time
 * @param {Array<number>} arr The array to search.
 * @param {number} target The target element to find.
 * @returns {number} The index of the target element if found, otherwise -1.
 */
function linearSearch(arr, target) {
  if (typeof target !== "number" || !arr) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return -1;
}

console.log("linearSearch", linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));

module.exports = linearSearch;
