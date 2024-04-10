/**
 * Bubble sort on an array to sort it in ascending order.
 *
 * O(n) Time - when the array is nearly sorted.
 *
 * O(n^2) Time - otherwise.
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSortFor(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log("bubbleSortFor", bubbleSortFor([11, 3, 32, 24, 1, -3]));

/**
 * Bubble sort on an array to sort it in ascending order using recursion.
 *
 * O(n) Time - when the array is nearly sorted.
 *
 * O(n^2) Time - otherwise.
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function bubbleSortRecursive(arr) {
  let noSwaps = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      noSwaps = false;
    }
  }

  if (noSwaps) {
    return arr;
  } else {
    return bubbleSortRecursive(arr);
  }
}

console.log("bubbleSortRecursive", bubbleSortRecursive([11, 3, 32, 24, 1, -3]));
