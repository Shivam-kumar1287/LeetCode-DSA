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
class q199 {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> list=new ArrayList<>();
        return helper(list,root,0);
    }
    public List<Integer> helper(List<Integer> list, TreeNode root,int l){
        if(root==null)return list;
        if(l==list.size()){
            list.add(root.val);}
        helper(list,root.right,l+1);
        helper(list,root.left,l+1);
        return list;
    }
}