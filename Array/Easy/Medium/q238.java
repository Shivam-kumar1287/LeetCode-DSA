import java.util.*;

class q238 {

    public int[] s(int[] nums) {

        int n = nums.length;

        if (n == 0) return new int[0];

        int[] ans = new int[n];

        // Step 1: Left product
        ans[0] = 1;
        for (int i = 1; i < n; i++) {
            ans[i] = ans[i - 1] * nums[i - 1];
        }

        System.out.println("After LEFT product (prefix):");
        System.out.println(Arrays.toString(ans));
        System.out.println();

        // Step 2: Right product
        int right = 1;
        for (int i = n - 1; i >= 0; i--) {
            System.out.println("Before update: ans[" + i + "] = " + ans[i] + ", right = " + right);
            ans[i] = ans[i] * right;
            System.out.println("After update: ans[" + i + "] = " + ans[i]);
            right *= nums[i];
            System.out.println("Updated right = " + right);
            System.out.println();
        }

        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] nums = new int[n];

        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        q238 sol = new q238();
        int[] result = sol.s(nums);

        System.out.println("Final Answer:");
        System.out.println(Arrays.toString(result));

        sc.close();
    }
}