import java.util.*;

class bfsbasic {

    static class Node {
        int data;
        Node left;
        Node right;

        Node(int data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    // BFS Traversal
    public static void bfsprint(Node root) {

        Queue<Node> q = new LinkedList<>();

        q.offer(root);
        int l=0;
        while (!q.isEmpty()) {

            System.out.println("Level " + l + ": " );
             l++;
           int s =q.size();
                for(int i=0;i<s;i++){
                    Node curr=q.poll();
                System.out.println(curr.data+" ");
               if (curr.left != null) {
                     q.offer(curr.left);
                }

                if (curr.right != null) {
                    q.offer(curr.right);
                }
        }
        }
    }

    public static void main(String[] args) {

        Node root = new Node(1);

        root.left = new Node(2);
        root.right = new Node(3);

        root.left.left = new Node(4);
        root.left.right = new Node(5);

        root.right.left = new Node(6);
        root.right.right = new Node(7);

        bfsprint(root);
    }
}