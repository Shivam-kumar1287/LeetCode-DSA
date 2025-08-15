
    class qq {
   class Solution {
    public int nCr(int n, int r) {
        if (n == 0) return 0;
        if (r == 0 || n == r) return 1;
        if (r > n) return 0;

        r = Math.min(r, n - r); 

        long result = 1;
        int numerator = n;
        int denominator = 1;

        while (denominator <= r) {
            result *= numerator;  
            result /= denominator; 
            numerator--;
            denominator++;
        }

        return (int) result;
    }
}

public static void main(String[] args) {
    qq s=new qq();
    int n=22,r=1;

    System.out.println(s.nCr(n,r));
}

    }
