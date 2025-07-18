import java.util.*;
public class q215 {
    public int kthlargest(int[] nums,int k){
        //short cut way
        // Arrays.sort(nums);
        // return nums[nums.length-k];

        // using priority queue
        PriorityQueue<Integer> pq=new PriorityQueue<>();
        for(int i=0;i<nums.length;i++){
            pq.add(nums[i]);
            if(pq.size()>k){
                pq.poll();
            }
        }
        return pq.peek();
    }
    public static void main(String[] args) {
        q215 obj=new q215();
        int[] nums={3,2,1,5,6,4};
        int k=2;
        System.out.println(obj.kthlargest(nums,k));
    }
}
