window.TopicsData = window.TopicsData || {};
window.TopicsData["BinaryTree"] = {
    title: "Binary Trees & BST",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Root, left child, right child."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Most tree problems use DFS (Recursion) or BFS (Queue).",
                "<strong>DFS Code Pattern:</strong><pre><code>public void dfs(TreeNode node) {\n    if (node == null) return;\n    // Pre-order logic\n    dfs(node.left);\n    // In-order logic\n    dfs(node.right);\n    // Post-order logic\n}</code></pre>",
                "<strong>BFS Code Pattern (Level Order Traversal):</strong><pre><code>Queue<TreeNode> q = new LinkedList<>();\nq.offer(root);\nwhile (!q.isEmpty()) {\n    int size = q.size();\n    for (int i = 0; i < size; i++) {\n        TreeNode curr = q.poll();\n        if (curr.left != null) q.offer(curr.left);\n        if (curr.right != null) q.offer(curr.right);\n    }\n}</code></pre>"
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Traversal (DFS/BFS):</strong> O(N) Time.",
                "<strong>Search/Insert/Delete in standard Binary Tree:</strong> O(N) Time.",
                "<strong>Search/Insert/Delete in balanced BST:</strong> O(log N) Time.",
                "<strong>Space Complexity (DFS):</strong> O(H) where H is the height of the tree (O(N) worst case, O(log N) best).",
                "<strong>Space Complexity (BFS):</strong> O(W) where W is the maximum width of the tree (O(N) worst case)."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
