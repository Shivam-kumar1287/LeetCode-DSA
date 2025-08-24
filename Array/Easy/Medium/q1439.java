class q1439 {
    public int longestSubarray(int[] nums) {
        int max = 0;
        boolean hasZero = false;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                hasZero = true;
                max = Math.max(max, check(nums, i));
            }
        }

        return hasZero ? max : nums.length - 1;
    }

    private int check(int[] nums, int idx) {
        int l = idx - 1, r = idx + 1;
        int count = 0;

        while (l >= 0 && nums[l] == 1) {
            count++;
            l--;
        }

        while (r < nums.length && nums[r] == 1) {
            count++;
            r++;
        }

        return count;
    }
}
