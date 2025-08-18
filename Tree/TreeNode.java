import java.util.*;

  public class TreeNode {
      int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }
 
class q501 {
    private Integer prev = null;
    private int count = 1;
    private int maxCount = 0;
    
    public int[] findMode(TreeNode root) {
        List<Integer> modes = new ArrayList<>();
        inorder(root, modes);
        return modes.stream().mapToInt(i -> i).toArray();
    }
    
    private void inorder(TreeNode node, List<Integer> modes) {
        if (node == null) return;
        
        inorder(node.left, modes);
        
        if (prev != null) {
            if (node.val == prev) {
                count++;
            } else {
                count = 1;
            }
        }
        
        if (count > maxCount) {
            maxCount = count;
            modes.clear();
            modes.add(node.val);
        } else if (count == maxCount) {
            modes.add(node.val);
        }
        
        prev = node.val;
        
        inorder(node.right, modes);
    }
}