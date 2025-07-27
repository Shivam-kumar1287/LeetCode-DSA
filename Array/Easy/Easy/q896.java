public class q896 {
    public boolean isMonotonic(int[] nums) {
       boolean ii=true;
       boolean dd=true;
       for(int i=1;i<nums.length;i++) {
        if(nums[i]>nums[i-1]){
            ii=false;
        }
        if(nums[i]<nums[i-1]){
            dd=false;
        }
       }
       return ii || dd;
    }
}

    public static void main(String[] args) {
        q896 q = new q896();
        int[] nums = {1, 2, 2, 3};
        System.out.println(q.isMonotonic(nums)); // Output: true
    }
}