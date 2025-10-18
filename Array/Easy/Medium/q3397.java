import java.util.Arrays;

class q3397 {
    public int maxDistinctElements(int[] nums, int k) {
        Arrays.sort(nums);
        int c=0;
        int cur=Integer.MIN_VALUE;
        for (int i:nums){
            int l=i-k;
            int h=i+k;
            if(cur+1<=h){
                int as=Math.max(cur+1,l);
                cur=as;
                c+=1;
            }
        }
        return c;
    }
}