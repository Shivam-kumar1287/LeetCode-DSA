package Array.Easy.Easy;

public class q121 {
    public int maxProfit(int[] prices) {
        int maxp = 0;
        int minp = Integer.MAX_VALUE;

        for (int p : prices) {
            minp = Math.min(minp, p);
            maxp = Math.max(maxp, p - minp);
        }
        return maxp;
    }

    public static void main(String[] args) {
        q121 solution = new q121();
        System.out.println(solution.maxProfit(new int[]{7, 1, 5, 3, 6, 4})); // Output: 5
        System.out.println(solution.maxProfit(new int[]{7, 6, 4, 3, 1})); // Output: 0
    }
}
    
