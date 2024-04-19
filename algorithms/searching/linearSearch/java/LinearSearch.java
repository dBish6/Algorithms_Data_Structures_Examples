public class LinearSearch {
    /**
     * Linear search on an array to find the index of an element.
     *
     * O(n) Time
     * @param arr The array to search.
     * @param target The target element to find.
     * @return The index of the target element if found, otherwise -1.
     */
    public int search(int[] arr, int target) {
        if (arr == null) return -1;
        for (int i = 0; i < arr.length; i++) {
            if (target == arr[i]) return i;
        }
        return -1;
    }
}

class LinearSearchUsage {
    public static void main(String[] args) {
        int[] arr = {9, 8, 7, 6, 5, 4, 3, 2, 1, 0};
  
        LinearSearch linearSearch = new LinearSearch();
        System.out.println("LinearSearch: " + linearSearch.search(arr, 4));
    }
} 
