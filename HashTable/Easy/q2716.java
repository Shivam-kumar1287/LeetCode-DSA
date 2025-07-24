import java.util.HashSet;
import java.util.Set;

public class q2716 {
    class Solution {
    public int minimizedStringLength(String s) {
        Set<Character> set=new HashSet<>();
        int c=0;
        for(int i=0;i<s.length();i++){

            if(!set.contains(s.charAt(i))){
               set.add(s.charAt(i));
               c++;
            }
        }
        return c;
    }
}
}
