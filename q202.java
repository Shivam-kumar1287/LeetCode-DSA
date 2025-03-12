import  java.util.*;
public class q202 {
 
    public static  boolean isHappy(int n) {
        Set<Integer> set = new HashSet<>();
        
        while (n != 1 && !set.contains(n)) {  
                 set.add(n); 
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        
        return n == 1;  
      }

      public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        boolean result=isHappy(n);
        System.out.println(result);
      }
}


