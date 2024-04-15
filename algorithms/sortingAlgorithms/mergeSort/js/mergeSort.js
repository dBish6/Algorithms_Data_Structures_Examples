/**
 * Merge sort on an array to sort it in ascending order.
 *
 * O(n log n) Time
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const merge = (left, right) => {
    let newArr = [],
      leftIndex = 0,
      rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        newArr.push(left[leftIndex]);
        leftIndex++;
      } else {
        newArr.push(right[rightIndex]);
        rightIndex++;
      }
    }

    // Places remaining elements into the newArr; the side that wasn't merged in the loop above.
    while (leftIndex < left.length) {
      newArr.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      newArr.push(right[rightIndex]);
      rightIndex++;
    }

    return newArr;
  };

  const mid = Math.floor(arr.length / 2),
    left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log("mergeSort", mergeSort([11, 3, 32, 24, 1, -3]));
