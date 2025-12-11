
import java.lang.reflect.Array;
import java.util.Arrays;

public class climb {

    //use recursion to solve climb stairs problem
    // public static void main(String[] args) {
    //     int n=44;
    //     System.out.println(climbStairs(n));
    // }
    // public static int climbStairs(int n) {
    //     if(n<0) return 0;
    //     if(n==0)return 1;
    //             return climbStairs(n-1)+climbStairs(n-2);
    // }


    //use dp to solve climb stairs problem 
    public static void main(String[] args) {
        int n=44;
        // int dp[]=new int[n+1];
        // Array.fills(dp,-1);
        //System.out.println(climbStairs(n,dp));
        System.out.println(climbStairs(n));
    }

    //use memoization to solve climb stairs problem
    // public static int climbStairs(int n,int dp[]){
    //     if(n<0)return 0;
    //     if(n==0)return 1;
    //     if(dp[n]!=-1){
    //         return dp[n];
    //     }
    //     dp[n]=climbStairs(n-1, dp)+climbStairs(n-2, dp);
    //     return dp[n];
    // }


    public static int climbStairs(int n){
        int dp[]=new int[n+1];
        dp[0]=1;
        for(int i=1;i<=n;i++){
            if(i==1){
                dp[i]=dp[i-1]+0;
            }else{
                dp[i]=dp[i-1]+dp[i-2];
            }
        }
        return dp[n];
    }
}
