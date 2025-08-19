class q2348 {
    public long zeroFilledSubarray(int[] nums) {
        int secondemax=0,count=0,countmax=0,max=0;
         long total = 0;
        int currentZeros = 0;
        
        for (int num : nums) {
            if (num == 0) {
                currentZeros++;
                total += currentZeros;
            } else {
                currentZeros = 0;
            }
        }
        
        return total;
    }
}