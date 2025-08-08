class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] res = new int[nums1.length];

        for (int i = 0; i < nums1.length; i++) {
            int index = findIndex(nums2, nums1[i]);
            res[i] = findNextGreater(nums2, index);
        }

        return res;
    }

    private int findIndex(int[] arr, int n) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == n) return i;
        }
        return -1;
    }
    private int findNextGreater(int[] arr, int index) {
        

        for(int i=index;i<arr.length;i++){
            if(arr[i]>arr[index]){
                return arr[i];
            }
        }
        return -1;
    }
}
