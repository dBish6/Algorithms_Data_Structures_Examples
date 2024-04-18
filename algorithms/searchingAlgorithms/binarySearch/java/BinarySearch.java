public class BinarySearch {
    /**
     * Binary search on a sorted array to find the index of an element.
     *
     * O(log n) Time
     * @param arr The sorted array to search.
     * @param target The target element to find.
     * @return The index of the target element if found, otherwise -1.
     */
    public int search(int[] arr, int target) {
        if (arr == null || arr.length == 0) return -1;
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1; // Move the left pointer if mid is less than the target.
            } else {
                right = mid - 1; // Move the right pointer if greater than.
            }
        }

        return -1;
    }
}

class BinarySearchUsage {
    public static void main(String[] args) {
        int[] arr = {2, 5, 6, 9, 13, 15, 28};
  
        BinarySearch binarySearch = new BinarySearch();
        System.out.println("BinarySearch: " + binarySearch.search(arr, 15));
    }
} 
