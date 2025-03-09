import java.util.*;

public class q744 {
    static char find(char[] str, char target) {
        int s = 0, h = str.length - 1;
        
        while (s <= h) {
            int mid = s + (h - s) / 2;
            if (str[mid] > target) {
                h = mid - 1;
            } else {
                s = mid + 1;
            }
        }
        
        return str[s % str.length];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter size of character array: ");
        int size = sc.nextInt();
        
        char[] str = new char[size];
        System.out.println("Enter sorted characters:");
        for (int i = 0; i < size; i++) {
            str[i] = sc.next().charAt(0); 
          }
        
        System.out.print("Enter target character: ");
        char target = sc.next().charAt(0);
        
        System.out.println("Smallest character greater than target: " + find(str, target));

        sc.close();
    }
}
