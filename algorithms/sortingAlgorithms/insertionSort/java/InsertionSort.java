import java.util.Arrays;

public class InsertionSort {

    /**
     * Insertion sort on an array to sort it in ascending order.
     * Use when data is coming in live or just when you need to sort 1 element which was inserted, etc.
     *
     * O(n) Time - when the array is nearly sorted.
     * O(n^2) Time - otherwise.
     * @param arr The array to be sorted.
     * @return The sorted array.
     */
    public static int[] insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int current = arr[i],
              j = i - 1;
        
            do {  
              arr[j + 1] = arr[j];
              j--;
            } while (j >= 0 && arr[j] > current);

            arr[j + 1] = current;
          }

        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {11, 3, 32, 24, 1, -3};
        
        System.out.println("Insertion Sort: " + Arrays.toString(insertionSort(arr)));
    }
}
