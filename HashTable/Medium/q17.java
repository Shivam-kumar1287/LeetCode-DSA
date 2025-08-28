import java.util.ArrayList;
import java.util.List;

class q17 {

    public List<String> letterCombinations(String digits) {
        String[] str = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        List<String> list = new ArrayList<>();
        
        if (digits.length() == 0) {
            return list;
        }
        if (digits.length() == 1) {
            int index = digits.charAt(0) - '0';
            String letters = str[index];
            for (int i = 0; i < letters.length(); i++) {
                list.add(String.valueOf(letters.charAt(i)));
            }
            return list;
        }
       makelatter(digits,0,new StringBuilder(),str,list);
       return list;
        
    }
    private void makelatter(String digits,int index,StringBuilder curr,String[] mapping, List<String> result){
        if(index==digits.length()){
            result.add(curr.toString());
            return ;
        }
        int digit=digits.charAt(index)-'0';
        String letters=mapping[digit];
        for(int i=0;i<letters.length();i++){
            curr.append(letters.charAt(i));
            makelatter(digits,index+1,curr,mapping,result);
            curr.deleteCharAt(curr.length()-1);
        }
    }
}