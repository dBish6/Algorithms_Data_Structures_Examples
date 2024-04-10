import java.util.Arrays;

public class SelectionSort {

    /**
     * Selection sort on an array to sort it in ascending order.
     * Use when you want to reduce the amount of swaps that happen for some reason.
     * 
     * O(n^2) Time
     * @param arr The array to be sorted.
     * @return The sorted array.
     */
    public static int[] selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int lowest = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[lowest] > arr[j]) {
                    lowest = j;
                }
            }
            if (i != lowest) {
                int temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {11, 3, 32, 24, 1, -3};
        
        System.out.println("Selection Sort: " + Arrays.toString(selectionSort(arr)));
    }
}