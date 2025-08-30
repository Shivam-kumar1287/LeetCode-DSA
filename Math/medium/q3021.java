package leetcode.Math.medium;

class Solution {
    public long flowerGame(int n, int m) {
     long  co=0;
    long   ce1=0;
    long   co1=0;
     long    ce=0;        
        if (n % 2 == 0){
            ce = n / 2;
            co = n / 2;
            }
         else{
            ce = n / 2;
            co = n / 2 + 1;
        }
            
        if( m % 2 == 0){
            ce1 = m / 2;
            co1 = m / 2;
        }
        else{
            ce1 = m /2;
            co1 = m / 2 + 1;
        }
            
        return ce1 * co + co1 * ce;  
    }
}