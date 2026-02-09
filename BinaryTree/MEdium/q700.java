class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class q700 {

    // Search BST method
    public TreeNode searchBST(TreeNode root, int val) {
        if (root == null) {
            return null;
        }

        if (root.val == val) {
            return root;
        }

        if (val < root.val) {
            return searchBST(root.left, val);
        }

        return searchBST(root.right, val);
    }

    // MAIN METHOD
    public static void main(String[] args) {

        /*
              4
             / \
            2   7
           / \
          1   3
        */

        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);

        q700 sol = new q700();

        int searchValue = 0;
        TreeNode result = sol.searchBST(root, searchValue);

        if (result != null) {
            System.out.println("Node found: " + result.val);
        } else {
            System.out.println("Value not found in BST");
        }
    }
}
