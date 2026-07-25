package Array.Easy.Easy;

import java.util.ArrayList;
import java.util.List;

public class q3526 {
     public int maxProduct(int n) {
       int mul=1;
        int c=0;
        int ans=0;
        List<Integer> list=new ArrayList<>();
        while(n>0){
            int r=n%10;
            list.add(r);
            n/=10;
        }
         for(int i=1;i<list.size();i++){
            ans=Math.max(ans,list.get(i)*list.get(i-1));
        }
        return ans;
    }
    public static void main(String[] args) {
        q3526 ob=new q3526();
        int n=437;
        System.out.println(ob.maxProduct(n));
    }   
}
