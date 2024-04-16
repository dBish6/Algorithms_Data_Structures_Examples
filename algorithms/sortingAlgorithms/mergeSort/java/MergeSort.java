import java.util.Arrays;

public class MergeSort {
    private static int[] merge(int[] left, int[] right) {
        int[] result = new int[left.length + right.length];
        int leftIndex = 0, rightIndex = 0, resultIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result[resultIndex++] = left[leftIndex++];
            } else {
                result[resultIndex++] = right[rightIndex++];
            }
        }

        while (leftIndex < left.length) {
            result[resultIndex++] = left[leftIndex++];
        }

        while (rightIndex < right.length) {
            result[resultIndex++] = right[rightIndex++];
        }

        return result;
    }

    /**
     * Merge sort on an array to sort it in ascending order.
     *
     * O(n log n) Time
     * @param arr The array to be sorted.
     * @return The sorted array.
     */
    public int[] sort(int[] arr) {
        if (arr.length <= 1) return arr;

        int mid = arr.length / 2;
        int[] left = sort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = sort(Arrays.copyOfRange(arr, mid, arr.length));

        return merge(left, right);
    }
}

class Usage {
    public static void main(String[] args) {
        int[] arr = {11, 3, 32, 24, 1, -3};

        MergeSort mergeSort = new MergeSort();
        System.out.println("mergeSort: " + Arrays.toString(mergeSort.sort(arr)));
    }
} 