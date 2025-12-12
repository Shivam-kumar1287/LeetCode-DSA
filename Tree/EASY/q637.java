package Tree.EASY;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class q637 {

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

    public List<Double> averageOfLevels(TreeNode root) {
        List<Double> list = new ArrayList<>();
        if (root == null) return list;

        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);

        int level = 0;

        while (!q.isEmpty()) {
            int size = q.size();
            long sum = 0;

            System.out.println("\n====== LEVEL " + level + " ======");
            System.out.println("Nodes at this level: " + size);

            for (int i = 0; i < size; i++) {

                TreeNode node = q.poll();
                System.out.println("Polled node value: " + node.val);

                sum += node.val;
                System.out.println("Updated sum = " + sum);

                if (node.left != null) {
                    q.offer(node.left);
                    System.out.println(" → Added LEFT child: " + node.left.val);
                }

                if (node.right != null) {
                    q.offer(node.right);
                    System.out.println(" → Added RIGHT child: " + node.right.val);
                }
            }

            double avg = sum * 1.0 / size;
            System.out.println("Average of this level = " + avg);
            System.out.println("==========================");
            System.out.println("End of LEVEL " + size + "\n");
            list.add(avg);
            level++;
        }
        return list;
    }

    public static void main(String[] args) {
        q637 obj = new q637();

        q637.TreeNode root = obj.new TreeNode(3);
        root.left = obj.new TreeNode(9);
        root.right = obj.new TreeNode(20);
        root.right.left = obj.new TreeNode(15);
        root.right.right = obj.new TreeNode(7);
        root.left.left = obj.new TreeNode(4);
        root.left.right = obj.new TreeNode(5);
        root.left.left.left = obj.new TreeNode(1);
        root.left.left.right = obj.new TreeNode(2);

        System.out.println("\nFINAL RESULT = " + obj.averageOfLevels(root));
    }
}

//         3
//        / \
//       9   20
//      / \  / \
//     4  5 15  7
//    / \
//   1   2
