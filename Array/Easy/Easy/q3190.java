
public class q3190 { public int minimumOperations(int[] nums) {
        int c=0;
        for(int i:nums){
            if(i%3!=0){
                if((i+1)%3==0 || (i-1)%3==0){
                    c++;
                }
            }
        }
    return c;
    }
}