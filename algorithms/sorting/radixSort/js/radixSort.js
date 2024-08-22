function getDigit(num, i) {
  return Math.floor(num / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * Radix sort on an array to sort it in ascending order; no comparisons.
 *
 * O(nk) OR O(n log n) Time (Controversy)
 * @param {Array<number>} arr The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function radixSort(arr) {
  const maxDigit = mostDigits(arr);

  for (let i = 0; i < maxDigit; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = buckets.flat();
  }

  return arr;
}

console.log("radixSort", radixSort([23, 345, 5467, 12, 2345, 9852]));

module.exports = radixSort;
