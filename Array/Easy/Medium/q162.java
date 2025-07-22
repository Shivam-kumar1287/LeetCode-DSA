
public class q162 {
     public int findPeakElement(int[] nums) {
        int index=0;
        int c=nums[0];
        for(int i=1;i<nums.length;i++){
            if(nums[i]>c){
                index=i;
                c=nums[i];
            }
            
        }
        return index;
    }
    public static void main(String[] args) {
        q162 solution = new q162();
        int[] nums = {1, 2, 3, 1};
        int peakIndex = solution.findPeakElement(nums);
        System.out.println("Peak element index: " + peakIndex); // Output: 2
    }
}
