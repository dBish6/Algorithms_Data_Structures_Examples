/**
 * Selection sort on an array to sort it in ascending order.
 *
 * Use when you want to reduce the amount of swaps that happen for some reason.
 *
 * O(n^2) Time
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return arr;
}

console.log("selectionSort", selectionSort([11, 3, 32, 24, 1, -3]));

module.exports = selectionSort;
