/**
 * Binary search on a sorted array to find the index of an element.
 *
 * O(log n) Time
 * @param {Array<number>} arr The sorted array to search.
 * @param {number} target The target element to find.
 * @returns {number} The index of the target element if found, otherwise -1.
 */
function binarySearch(arr, target) {
  if (typeof target !== "number" || !arr) return -1;
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1; // Move the left pointer if mid is less than the target.
    } else {
      right = mid - 1; // Move the right pointer if greater than.
    }
  }

  return -1;
}

console.log("binarySearch", binarySearch([2, 5, 6, 9, 13, 15, 28], 15));

module.exports = binarySearch;
