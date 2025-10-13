import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class q2273 {
    public List<String> removeAnagrams(String[] words) {
        List<String> list=new ArrayList<>();
        String prev="";
        for(String str:words){
            String sortt= sortString(str);
            if(!sortt.equals(prev)){
                list.add(str);
                prev=sortt;
            }
                       
        }
        return list;
    }
    private String sortString(String words){
      char[] arr= words.toCharArray();
      Arrays.sort(arr);
      return new   String(arr);
    }
}