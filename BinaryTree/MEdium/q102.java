/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class 102 {
    public List<List<Integer>> levelOrder(TreeNode root) {
                List<List<Integer>> result=new ArrayList<>();
        return level(root,0,result);
    }
    private List<List<Integer>> level(TreeNode root,int levelk, List<List<Integer>> list){
        if(root == null) 
        return list;
        if(list.size()==levelk){
            list.add(new ArrayList<>());
        }
        list.get(levelk).add(root.val);
        level(root.left,levelk+1,list);
        level(root.right,levelk+1,list);

        return list;
    }
}