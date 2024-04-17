import java.util.Arrays;

public class BubbleSort {
    /**
     * Bubble sort on an array to sort it in ascending order.
     *
     * O(n) Time - when the array is nearly sorted.
     * O(n^2) Time - otherwise.
     * @param arr The array to be sorted.
     * @return The sorted array.
     */
    public int[] bubbleSortFor(int[] arr) {
        boolean noSwaps;
        int n = arr.length;
        
        for (int i = n - 1; i > 0; i--) {
            noSwaps = true;
            for (int j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    noSwaps = false;
                }
            }
            if (noSwaps) break;
        }
        return arr;
    }

    /**
     * Bubble sort on an array to sort it in ascending order using recursion.
     *
     * O(n) Time - when the array is nearly sorted.
     * O(n^2) Time - otherwise.
     * @param arr The array to be sorted.
     * @return The sorted array.
     */
    public int[] bubbleSortRecursive(int[] arr) {
        boolean noSwaps = true;

        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                noSwaps = false;
            }
        }

        if (noSwaps) {
            return arr;
        } else {
            return bubbleSortRecursive(arr);
        }
    }
}

class BubbleSortUsage {
    public static void main(String[] args) {
        int[] arr = {11, 3, 32, 24, 1, -3};

        BubbleSort bubbleSort = new BubbleSort();
        System.out.println("bubbleSortFor: " + Arrays.toString(bubbleSort.bubbleSortFor(arr)));
        System.out.println("bubbleSortRecursive: " + Arrays.toString(bubbleSort.bubbleSortRecursive(arr)));
    }
  } 