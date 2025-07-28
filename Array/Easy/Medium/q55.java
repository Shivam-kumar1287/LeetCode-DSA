public class q55 {
    public boolean canJump(int[] nums) {
        int minfind=0;
        for(int i=0;i<nums.length;i++){
            if(i > minfind){
                return false;}

            minfind=Math.max(minfind,i+nums[i]) ;
            
        }
        return true;
    }


    public static void main(String[] args) {
        q55 q = new q55();
        int[] nums = {2, 3, 1, 1, 4};
        System.out.println(q.canJump(nums)); // Output: true
    }
}