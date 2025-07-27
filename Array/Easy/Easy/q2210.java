import java.util.ArrayList;
import java.util.List;

class q2210{
    public int countHillValley(int[] nums) {
        List<Integer> list=new ArrayList<>();
        list.add(nums[0]);
        for(int i=1;i<nums.length;i++){
            if(nums[i-1]!=nums[i])
                list.add(nums[i]);
        }
        int co=0;
        for(int i=1;i<list.size()-1;i++){
            int c=list.get(i);
            int p=list.get(i-1);
            int n=list.get(i+1);
            if((c>p && c>n) || (c<p && c<n) ){
                co+=1;
            }
        }
        return co;
    }
    public static void main(String[] args){
        q2210 q=new q2210();
        int[] nums={6,6,5,5,4,1};
        System.out.println(q.countHillValley(nums));
    }
}