public class q868 {class Solution {
    public int binaryGap(int n) {
        String s=Integer.toBinaryString(n);
        int f=-1;
        int max=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='1'){
                if(f!=-1)
            max=Math.max(max,i-f);
            f=i;}
        }
        return max;
    }
}