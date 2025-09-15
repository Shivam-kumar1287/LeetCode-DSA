class q41 {
    public int firstMissingPositive(int[] nums) {
        int[] filteredNums = Arrays.stream(nums).filter(n -> n > 0).toArray();
        int exp=1;
        Arrays.sort(filteredNums);
        for (int i:filteredNums){
            if(i==exp){
                 exp++;
            }
            if(i>exp){
                return exp;
            }
        }
        return exp;
    }
}