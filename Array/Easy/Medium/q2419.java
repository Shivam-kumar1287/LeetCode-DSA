
import java.util.*;

public class q2419 {
    public int longestSubarray(int[] nums){
        int max = Arrays.stream(nums).max().getAsInt();
        int cur=0;
        int maxLength=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==max){
                cur++;
            }else{
                maxLength=Math.max(maxLength,cur);
                cur=0;
            }
        }
        return maxLength;
    }
    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 4, 5, 5, 5, 3, 2, 1};
        int result = sb.longestSubarray(nums);
        System.out.println("Length of longest subarray with maximum value: " + result);

    }
}
