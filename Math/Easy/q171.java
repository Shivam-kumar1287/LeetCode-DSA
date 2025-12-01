public class q171 {
    public int titleToNumber(String columnTitle) {
        int s=0,p=0;
        int n=columnTitle.length();
        for(int i=n-1;i>=0;i--){
            int temp=columnTitle.charAt(i)-64;
            s+=Math.pow(26,p++)*temp;
        }
        return s;
    }
}