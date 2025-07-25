 import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
 class q3487{
     public int maxSum(int[] nums) {
        Set<Integer> set=new HashSet<>();
        int s=0;
        for(int n:nums){
            if(n>0)
            if(!set.contains(n)){
                set.add(n);
                s+=n;
            }
        }
        if(s==0){
            Arrays.sort(nums);
            return nums[nums.length-1];
        }
        return s;
    }
}