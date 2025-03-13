public class Solution {
    public double myPow(double x, int n) {
        long l = n;
        if(l == 0){
            return 1.0;
        }
        if(l == 1){
            return x;
        }
        double res = 0;
        if(l < 0){
            l = -l;
            x = 1/x;
            return helperFun(x , l);
        }
        return helperFun(x , l);
    }
    private double helperFun(double x,long n){
        if(n == 0){
            return 1.0;
        }
        // double res = 0;
        if(n%2 == 0){
            return helperFun(x*x ,n/2);
        }else if(n%2 == 1){
            return x*helperFun(x , n-1);
        }
        return 0;
    }
} 