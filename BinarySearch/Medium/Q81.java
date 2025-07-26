package leetcode.BinarySearch.Medium;
import java.util.HashSet;
import java.util.Set;
public class Q81 {
    public boolean search(int[] nums, int target) {
        Set<Integer> set=new HashSet<>();
        for(int n: nums){
            if(!set.contains(n)){
                set.add(n);
            }
             if(set.contains(target)){
            return true;
        }
        }
        
        return false;
    }
}