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
class q104 {
    public int maxDepth(TreeNode root) {
      if(root==null)  {
        return 0;
      }
      return count( root);
    }
    private int count(TreeNode root){
        if(root==null){
         return 0;
        }
        int r=count(root.right);
        int c=count(root.left);
      return Math.max(r,c)+1;
    }
}