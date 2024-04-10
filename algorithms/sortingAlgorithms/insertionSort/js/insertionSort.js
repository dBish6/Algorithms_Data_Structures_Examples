/**
 * Insertion sort on an array to sort it in ascending order.
 *
 * Use when data is coming in live or just when you need to sort 1 element which was inserted, etc.
 *
 * O(n) Time - when the array is nearly sorted.
 *
 * O(n^2) Time - otherwise.
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i],
      j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

console.log("insertionSort", insertionSort([11, 3, 32, 24, 1, -3]));
