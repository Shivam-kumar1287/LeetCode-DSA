public class q448 {public List<Integer> findDisappearedNumbers(int[] nums) {
        int n = nums.length;
        Set<Integer> set = new HashSet<>();
        List<Integer> list = new ArrayList<>();

        // Add all unique numbers to the set
        for (int num : nums) {
            set.add(num);
        }

        // Check for missing numbers from 1 to n
        for (int i = 1; i <= n; i++) {
            if (!set.contains(i)) {
                list.add(i);
            }
        }

        return list;
    }
}
