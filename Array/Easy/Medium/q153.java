public class q153 {
    public int findMin(int[] nums) {
     int   l=0;
     int   r=nums.length-1;
        int ans=Integer.MAX_VALUE;
        while(l<=r){
            ans=Math.min(ans,Math.min(nums[l],nums[r]));
            l+=1;
            r-=1;}
        return ans;
    }
}
