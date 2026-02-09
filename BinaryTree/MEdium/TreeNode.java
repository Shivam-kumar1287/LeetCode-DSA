
  Definition for a binary tree node.
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
 
class q1382 {
    List<Integer> list=new ArrayList<>();
    public TreeNode balanceBST(TreeNode root) {
        inorder(root);
        return createbst(0,list.size()-1);
    }
    public void inorder(TreeNode root){
        if(root==null){
            return ;
        }
        inorder(root.left);
        list.add(root.val);
        inorder(root.right);
    }
    public TreeNode createbst(int s,int e){
        if(s>e){
            return null;
        }
        int mid=s+(e-s)/2;
        TreeNode left=createbst(s,mid-1);
        TreeNode right=createbst(mid+1,e);
        TreeNode  root=new TreeNode(list.get(mid),left,right);
        return root;
    }
}