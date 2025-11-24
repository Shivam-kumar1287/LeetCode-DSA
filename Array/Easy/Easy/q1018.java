import java.util.ArrayList;
import java.util.List;
class q1018 {
    public List<Boolean> prefixesDivBy5(int[] nums) {
        List<Boolean> list=new ArrayList<>();
        
        int val=0;
        for(int i:nums){
            val=((val<<1)+i)%5;
            list.add(val==0);
        }
        return list;
    }
}