package Bit Manipulation.Easy;

public class q762 {
    public int countPrimeSetBits(int left, int right) {
        int c=0;
        for(int i=left;i<=right;i++){
            String s=Integer.toBinaryString(i);
            if(isPrime(s)){
                c++;
            }
        }
        return c;
    }
    public boolean isPrime(String s){
        int c=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='1'){
                c++;
            }
        }
        if(c<=1)return  false;
        for(int i=2;i*i<=c;i++){
            if(c%i==0){
                return false;
            }
        }
        return true;
    }
}