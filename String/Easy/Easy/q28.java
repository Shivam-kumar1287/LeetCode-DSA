package String.Easy.Easy;

public class q28 {
    public int strStr(String haystack, String needle) {
        int n=needle.length();
        int m=haystack.length();
          if (n == 0) return 0; 
        if (n > m) return -1;  
        if(haystack.equals(needle)){return 0;}
        if(n==1){
            char target = needle.charAt(0);
            for (int i = 0; i < m; i++) {
                if (haystack.charAt(i) == target) {
            return i;
            }
            }
            return -1;
        }
        for(int i=0;i<=m-n;i++){
            String s=haystack.substring(i,i+n);
            if(s.equals(needle)){
                return i;
            }
        }
        return -1;
    }

    
}
