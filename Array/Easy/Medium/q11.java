class q11{
    public int maxArea(int[] height) {
        int l = 0;
        int r = height.length - 1; 
          int result = 0;

        while (l < r) {
            int d = r - l;
             int num = Math.min(height[l], height[r]); 
            result = Math.max(result, d * num);
            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }
        return result;
    }
}
