public class q1695 {
    public int maximumUniqueSubarray(int[] nums) {
       HashSet<Integer> set=new HashSet<>();
       int s=0,maxsum=0;
       int j=0;
       for(int i=0;i<nums.length;i++){
        if(nums[i]>0)
        while(set.contains(nums[i])){
            set.remove(nums[j]);
            s-=nums[j];
            j++;
        }
        set.add(nums[i]);
        s+=nums[i];
        maxsum=Math.max(s,maxsum);
       }
       return maxsum;
    }
}