import java.util.Arrays;

public class QuickSort {
    private static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    private static int pivot(int[] arr, int start, int end) {
        int pivotValue = arr[start];
        int swapIndex = start;

        // Put all numbers less than the pivot behind(left side) the pivot index.
        for (int i = start + 1; i <= end; i++) {
            if (arr[i] < pivotValue) {
                swapIndex++;
                swap(arr, swapIndex, i);
            }
        }
        // When complete, swap the pivot from the start with the swap point for its correct position.
        swap(arr, start, swapIndex);

        return swapIndex;
    }

    private static void quickSort(int[] arr, int left, int right) {
        if (left >= right) return;

        // Position the pivot and elements less than in position and get the index.
        int pivotIndex = pivot(arr, left, right);
        // Sort left side.
        quickSort(arr, left, pivotIndex - 1);
        // Sort right side.
        quickSort(arr, pivotIndex + 1, right);
    }

    /**
     * Quick sort on an array to sort it in ascending order.
     *
     * O(n log n) Time
     * @param arr The array to be sorted.
     * @returns The sorted array.
     */
    public int[] sort(int[] arr) {
        quickSort(arr, 0, arr.length - 1);
        return arr;
    }
}

class QuickSortUsage {
    public static void main(String[] args) {
        int[] arr = {11, 3, 32, 24, 1, -3};

        QuickSort quickSort = new QuickSort();
        System.out.println("QuickSort: " + Arrays.toString(quickSort.sort(arr)));
    }
} 
