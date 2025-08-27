import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
   List<List<Integer>> list = new ArrayList<>();
        
        list.add(Arrays.asList(1, 2));
        list.add(Arrays.asList(4, 2));
        list.add(Arrays.asList(1, 3));
        list.add(Arrays.asList(5, 2));
        
        // Iterate and print
        for (List<Integer> inner : list) {
            for (Integer num : inner) {
                System.out.print(num + " ");
            }
            System.out.println(); 
        }
}

    }
