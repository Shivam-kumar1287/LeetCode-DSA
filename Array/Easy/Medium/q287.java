package Array.Easy.Medium;

import java.util.*;

public class q287 {public int findDuplicate(int[] nums) {
        HashSet<Integer>  s=new HashSet<>();
        for(int n: nums){
            if(!s.add(n)){
                return n;
            }
        }
        return 0;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] ar = new int[n];
        for (int i = 0; i < n; i++) {
            ar[i] = sc.nextInt();
        }

        q287 solution = new q287();
        int duplicate = solution.findDuplicate(ar);
        System.out.println("Duplicate number: " + duplicate);

        sc.close();
    }
}