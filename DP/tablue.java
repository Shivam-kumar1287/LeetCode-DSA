public class tablue {
    public static void main(String[] args) {
        int n=5;
        //int dp[]=new int[n+1];
        System.out.println(dptabuletion(n));
    }   
    public static int  dptabuletion(int n){
        int dp[]=new int[n+1];
        dp[0]=0;
        dp[1]=1;
        System.out.println("dp[0]: " + dp[0] + ", dp[1]: " + dp[1]);
        for(int i=2;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
            System.out.println("i: " + i + " dp[i]: " + dp[i]);
        }
        return dp[n-1] + dp[n-2];
        //jvjk
    }
}
