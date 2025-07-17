package leetcode.pattern;

//import Rec.integer;
import java.util.*;
//import numberques.genrate;
public class q118 {
    public List<List<Integer>> genrateList(int num){
        List<List<Integer>> list = new ArrayList<>();
       for(int i=0;i<num;i++){
        List<Integer> list1 = new ArrayList<>();
        int ans=0;
        for(int j=0;j<=i;j++){
         if(j==0 || j==i)
            list1.add(1);
         else{
            ans=list.get(i-1).get(j-1)+list.get(i-1).get(j);
                         list1.add(ans);
         }
        }
        list.add(list1);
       }
       return list;
    
    }
   
    public static void main(String[] args) {
        q118 obj = new q118();
       obj.genrateList(6);
    }

}


