class q2221 {
    public int triangularSum(int[] nums) {
        List<Integer> list = new ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }
        
        while (list.size() > 1) {
            List<Integer> newList = new ArrayList<>();
            for (int i = 0; i < list.size() - 1; i++) {
                newList.add((list.get(i) + list.get(i + 1)) % 10);
            }
            list = newList;
        }
        
        return list.get(0);
    }
}