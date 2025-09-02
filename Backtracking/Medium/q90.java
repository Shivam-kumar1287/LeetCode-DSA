import java.util.*;
class q90 {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        Arrays.sort(nums); 
             maker(list, new ArrayList<>(), nums, 0);
        return list;}
    private void maker(List<List<Integer>> res, List<Integer> temp, int[] nums, int s) {
        res.add(new ArrayList<>(temp));
        for (int i = s; i < nums.length; i++) {
            if (i > s && nums[i] == nums[i - 1]) continue; 
                    temp.add(nums[i]);
            maker(res, temp, nums, i + 1);
            temp.remove(temp.size() - 1);        }
    }
}
