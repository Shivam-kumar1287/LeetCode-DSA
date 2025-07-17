// package leetcode;
import java.util.*;


public class q169 {

    
//     public static  int majorityElement(int[] nums) {
//         Arrays.sort(nums);
//         int n = nums.length;
//         return nums[n/2];
    
// }


public static int majorityElement(int nums[]){
    int count = 0;
    int candidate = 0;
    
    for (int num : nums) {
        if (count == 0) {
            candidate = num;
        }
        
        if (num == candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] arr=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }

        System.out.println(majorityElement(arr));
     sc.close();   
   
    }
}
