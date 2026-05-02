import java.util.Scanner;

class Solution {
    public int rotatedDigits(int n) {
        int c = 0;

        for (int i = 1; i <= n; i++) {
            System.out.println("\nChecking number: " + i);

            boolean good = isGood(i);

            System.out.println("Result for " + i + " = " + good);

            if (good) {
                c++;
                System.out.println(i + " is counted. Current count = " + c);
            } else {
                System.out.println(i + " is not counted.");
            }
        }

        return c;
    }

    public static boolean isGood(int n) {
        int original = n;
        boolean val = false;
   //nm mnf 
        while (n > 0) {
            int d = n % 10;

            System.out.println("Current n = " + n);
            System.out.println("Last digit = " + d);

            if (d == 3 || d == 4 || d == 7) {
                System.out.println("Digit " + d + " makes " + original + " invalid");
                return false;
            }

            if (d == 2 || d == 5 || d == 6 || d == 9) {
                val = true;
                System.out.println("Digit " + d + " changes after rotation");
            }

            n /= 10;
        }

        System.out.println("Final decision for " + original + " = " + val);
        return val;
    }
}

public class q788 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        Solution obj = new Solution();
        int ans = obj.rotatedDigits(n);

        System.out.println("\nFinal count = " + ans);

        sc.close();
    }
}