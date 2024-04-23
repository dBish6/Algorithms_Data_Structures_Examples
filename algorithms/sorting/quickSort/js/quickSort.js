function swap(arr, i, j) {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
}

function pivot(arr, start, end) {
  let pivot = arr[start],
    swapIndex = start;

  // Put all numbers less than the pivot behind(left side) the pivot index.
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  // When complete, swap the pivot from the start with the swap point for its correct position.
  swap(arr, start, swapIndex);

  return swapIndex;
}

/**
 * Quick sort on an array to sort it in ascending order.
 *
 * O(n log n) Time
 * @param {Array<number>} arr The array to be sorted.
 * @param {number} left Optional: the left boundary of the subarray to be sorted.
 * @param {number} right Optional: the right boundary of the subarray to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function quickSort(arr, left = 0, right = arr.length) {
  if (left >= right) return arr;

  // Position the pivot and elements less than in position and get the index.
  let pivotIndex = pivot(arr, left, right);
  // Sort left side.
  quickSort(arr, left, pivotIndex - 1);
  // Sort right side.
  quickSort(arr, pivotIndex + 1, right);

  return arr;
}

console.log("quickSort", quickSort([11, 3, 32, 24, 1, -3]));

module.exports = quickSort;
