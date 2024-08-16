/**
 * Generates the Fibonacci sequence up to a given number and returns the Fibonacci number at that position along with the sequence.
 *
 * O(n^2) Time
 * @dBish6 Author
 * @param {number} num The position in the Fibonacci sequence.
 * @param {Array<number>} [seq] The Fibonacci sequence built so far (internal use only).
 * @returns {Object} An object containing the number and the sequence.
 */
function fib(num, seq = [1, 1]) {
  if (num <= 2) return { number: seq[num - 1], seq: seq };

  const nextFib = seq[seq.length - 1] + seq[seq.length - 2];
  seq.push(nextFib);

  if (seq.length === num) return { number: nextFib, sequence: seq };

  return fib(num, seq);
}

console.log("fib", fib(9));

/**
 * Gets the Fibonacci number at the specific position using memoization.
 *
 * O(n) Time
 * @dBish6 Author
 * @param {number} num The position in the Fibonacci sequence.
 * @returns {Object} The Fibonacci number at the specified position.
 */
function fibOptimal(num) {
  const memo = [undefined, 1, 1];

  const handleFib = (num) => {
    if (memo[num] !== undefined) return memo[num];

    const result = handleFib(num - 1) + handleFib(num - 2);
    memo[num] = result;
    return result;
  };

  return handleFib(num);
}

console.log("fibOptimal", fibOptimal(4));

module.exports = { fib, fibOptimal }
