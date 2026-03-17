class Solution {
    public void q75(int[] nums) {
        int low = 0;                // Tracks the end of 0s section
        int mid = 0;                // Current element being processed
        int high = nums.length - 1; // Tracks the start of 2s section

        while (mid <= high) {
            if (nums[mid] == 0) {
                // Swap with low and move both pointers
                swap(nums, low, mid);
                low++;
                mid++;
            } else if (nums[mid] == 1) {
                // Just move mid (1s stay in the middle)
                mid++;
            } else { // nums[mid] == 2
                // Swap with high and decrement high
                swap(nums, mid, high);
                high--;
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}