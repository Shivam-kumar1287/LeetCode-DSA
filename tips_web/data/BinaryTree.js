window.TopicsData = window.TopicsData || {};
window.TopicsData["BinaryTree"] = {
    title: "Binary Trees & BST",
    sections: [
        {
            heading: "1. Binary Tree Basics",
            items: [
                `<strong>Definition:</strong> A Binary Tree is a hierarchical data structure where each node has at most two children (left and right).`,
                `<strong>Terminology & Properties:</strong><ul><li><strong>Parent/Child:</strong> A node is a parent to nodes directly connected below it.</li><li><strong>Leaf:</strong> A node with no children (both left and right references are null).</li><li><strong>Height:</strong> The length of the longest path from the root to any leaf node.</li><li><strong>Depth:</strong> The distance (number of edges) from the root to a specific node.</li><li><strong>Level:</strong> Depth + 1 (root is level 1).</li></ul>`,
                `<strong>Types of Binary Trees:</strong><ul><li><strong>Full Binary Tree:</strong> Every node has either 0 or 2 children.</li><li><strong>Complete Binary Tree:</strong> All levels are filled completely except possibly the last, which is filled from left to right.</li><li><strong>Perfect Binary Tree:</strong> All internal nodes have 2 children, and all leaves are at the same level.</li><li><strong>Balanced Binary Tree:</strong> The height difference between the left and right subtrees of any node is at most 1.</li><li><strong>Skewed Binary Tree:</strong> Every node has only a single child (left-skewed or right-skewed).</li></ul>`,
                `<strong>Basic Node Structure:</strong><pre><code>public class TreeNode {
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
}</code></pre>`,
                `<strong>Tree Visual Representation:</strong><pre>                    Root (Level 1)
                   /    \\
            Left Child   Right Child (Level 2)
           /    \\        /    \\
    Left Grand   Right  Left   Right (Level 3)</pre>`
            ]
        },
        {
            heading: "2. Binary Search Tree (BST)",
            items: [
                `<strong>Definition:</strong> A BST is a binary tree that satisfies the <strong>BST Property</strong>:<ul><li>The left subtree of a node contains only nodes with values less than the node's value.</li><li>The right subtree of a node contains only nodes with values greater than the node's value.</li><li>The left and right subtrees must also be binary search trees.</li><li><strong>Key Fact:</strong> An <em>inorder traversal</em> of a BST visits nodes in <strong>strictly sorted order</strong>.</li></ul>`,
                `<strong>BST Property Visualizer:</strong><pre>Valid BST:
        8
      /   \\
     3     10
    / \\      \\
   1   6      14
      / \\    /
     4   7  13\nInorder traversal (sorted): 1, 3, 4, 6, 7, 8, 10, 13, 14</pre>`,
                `<strong>BST Search - O(log N) Average:</strong><pre><code>// Recursive search
public TreeNode searchBST(TreeNode root, int val) {
    if (root == null || root.val == val) return root;
    return val &lt; root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

// Iterative search
public TreeNode searchBSTIterative(TreeNode root, int val) {
    while (root != null && root.val != val) {
        root = val &lt; root.val ? root.left : root.right;
    }
    return root;
}</code></pre>`,
                `<strong>BST Insert - O(log N) Average:</strong><pre><code>// Recursive insert
public TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null) return new TreeNode(val);
    if (val &lt; root.val) root.left = insertIntoBST(root.left, val);
    else if (val &gt; root.val) root.right = insertIntoBST(root.right, val);
    return root;
}</code></pre>`,
                `<strong>BST Delete - O(log N) Average:</strong><pre><code>public TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;
    if (key &lt; root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key &gt; root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node found
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        
        // Two children: replace with inorder successor (min in right subtree)
        TreeNode successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
}
private TreeNode findMin(TreeNode node) {
    while (node.left != null) node = node.left;
    return node;
}</code></pre>`,
                `<strong>Validate BST:</strong><pre><code>public boolean isValidBST(TreeNode root) {
    return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
}
private boolean isValidBST(TreeNode node, long min, long max) {
    if (node == null) return true;
    if (node.val &lt;= min || node.val &gt;= max) return false;
    return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
}</code></pre>`,
                `<strong>Lowest Common Ancestor (LCA) in BST:</strong><pre><code>public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null) return null;
    if (p.val &lt; root.val && q.val &lt; root.val) return lowestCommonAncestor(root.left, p, q);
    if (p.val &gt; root.val && q.val &gt; root.val) return lowestCommonAncestor(root.right, p, q);
    return root; // Split point - this node is the LCA
}</code></pre>`
            ]
        },
        {
            heading: "3. Traversal Patterns",
            items: [
                `<strong>Depth-First Search (DFS) Traversals:</strong><ul><li><strong>Preorder (Root &rarr; Left &rarr; Right):</strong> Process current before children.</li><li><strong>Inorder (Left &rarr; Root &rarr; Right):</strong> Process left child, then current, then right. Gives sorted order for BSTs.</li><li><strong>Postorder (Left &rarr; Right &rarr; Root):</strong> Process children before current. Perfect for bottom-up evaluations.</li></ul>`,
                `<strong>Inorder Traversal Iterative & Recursive Patterns:</strong><pre><code>// Recursive Inorder
public void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}

// Iterative Inorder using Stack
public void inorderIterative(TreeNode root) {
    Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
    TreeNode curr = root;
    while (curr != null || !stack.isEmpty()) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        System.out.print(curr.val + " ");
        curr = curr.right;
    }
}</code></pre>`,
                `<strong>Preorder Iterative Stack:</strong><pre><code>public void preorderIterative(TreeNode root) {
    if (root == null) return;
    Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
    stack.push(root);
    while (!stack.isEmpty()) {
        TreeNode node = stack.pop();
        System.out.print(node.val + " ");
        // Push right first so left is popped first (LIFO)
        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);
    }
}</code></pre>`,
                `<strong>Breadth-First Search (BFS) / Level Order Traversal:</strong><pre><code>public List&lt;List&lt;Integer&gt;&gt; levelOrder(TreeNode root) {
    List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
    if (root == null) return result;
    Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
    queue.offer(root);
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List&lt;Integer&gt; level = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; levelSize; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}</code></pre>`,
                `<strong>Traversals Output Visualizer:</strong><pre>        1
      /   \\
     2     3
    / \\   / \\
   4   5 6   7\nPreorder:  1, 2, 4, 5, 3, 6, 7
Inorder:   4, 2, 5, 1, 6, 3, 7
Postorder: 4, 5, 2, 6, 7, 3, 1
Level:     1, 2, 3, 4, 5, 6, 7</pre>`
            ]
        },
        {
            heading: "4. Common Tree Algorithms",
            items: [
                `<strong>Height & Depth Calculations:</strong><pre><code>// Maximum Height/Depth of Tree
public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Minimum depth
public int minDepth(TreeNode root) {
    if (root == null) return 0;
    if (root.left == null) return 1 + minDepth(root.right);
    if (root.right == null) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}</code></pre>`,
                `<strong>Diameter of Binary Tree (Longest path between any two nodes):</strong><pre><code>class Solution {
    private int diameter = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return diameter;
    }
    private int height(TreeNode node) {
        if (node == null) return 0;
        int leftH = height(node.left);
        int rightH = height(node.right);
        diameter = Math.max(diameter, leftH + rightH);
        return 1 + Math.max(leftH, rightH);
    }
}</code></pre>`,
                `<strong>Symmetric Tree (Mirror Check):</strong><pre><code>public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}
private boolean isMirror(TreeNode left, TreeNode right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    return left.val == right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
}</code></pre>`,
                `<strong>Generic Lowest Common Ancestor (LCA in Binary Tree - not BST):</strong><pre><code>public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root; // Split point
    return left != null ? left : right;
}</code></pre>`,
                `<strong>Serialize and Deserialize Binary Tree:</strong><pre><code>// Serialization (Level order BFS)
public String serialize(TreeNode root) {
    if (root == null) return "";
    StringBuilder sb = new StringBuilder();
    Queue&lt;TreeNode&gt; q = new LinkedList&lt;&gt;();
    q.offer(root);
    while (!q.isEmpty()) {
        TreeNode curr = q.poll();
        if (curr == null) {
            sb.append("null,");
        } else {
            sb.append(curr.val).append(",");
            q.offer(curr.left); q.offer(curr.right);
        }
    }
    return sb.toString();
}

// Deserialization
public TreeNode deserialize(String data) {
    if (data.isEmpty()) return null;
    String[] values = data.split(",");
    TreeNode root = new TreeNode(Integer.parseInt(values[0]));
    Queue&lt;TreeNode&gt; q = new LinkedList&lt;&gt;();
    q.offer(root);
    for (int i = 1; i &lt; values.length; i++) {
        TreeNode parent = q.poll();
        if (!values[i].equals("null")) {
            parent.left = new TreeNode(Integer.parseInt(values[i]));
            q.offer(parent.left);
        }
        i++;
        if (i &lt; values.length && !values[i].equals("null")) {
            parent.right = new TreeNode(Integer.parseInt(values[i]));
            q.offer(parent.right);
        }
    }
    return root;
}</code></pre>`,
                `<strong>9. Binary Tree Right Side View (LeetCode 199):</strong><pre><code>public List&lt;Integer&gt; rightSideView(TreeNode root) {
    List&lt;Integer&gt; result = new ArrayList&lt;&gt;();
    if (root == null) return result;
    
    Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i &lt; levelSize; i++) {
            TreeNode node = queue.poll();
            if (i == levelSize - 1) {
                result.add(node.val); // Last node in level
            }
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    
    return result;
}</code></pre>`,
                `<strong>10. Zigzag Level Order Traversal (LeetCode 103):</strong><pre><code>public List&lt;List&lt;Integer&gt;&gt; zigzagLevelOrder(TreeNode root) {
    List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
    if (root == null) return result;
    
    Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
    queue.offer(root);
    boolean leftToRight = true;
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List&lt;Integer&gt; level = new ArrayList&lt;&gt;();
        
        for (int i = 0; i &lt; levelSize; i++) {
            TreeNode node = queue.poll();
            if (leftToRight) {
                level.add(node.val);
            } else {
                level.add(0, node.val); // Add to front
            }
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(level);
        leftToRight = !leftToRight;
    }
    
    return result;
}</code></pre>`,
                `<strong>11. Flatten Binary Tree to Linked List (LeetCode 114):</strong><pre><code>// Iterative Stack Solution (O(H) Space)
public void flatten(TreeNode root) {
    if (root == null) return;
    
    Stack&lt;TreeNode&gt; stack = new Stack&lt;&gt;();
    stack.push(root);
    
    while (!stack.isEmpty()) {
        TreeNode curr = stack.pop();
        
        if (curr.right != null) stack.push(curr.right);
        if (curr.left != null) stack.push(curr.left);
        
        if (!stack.isEmpty()) {
            curr.right = stack.peek();
        }
        curr.left = null;
    }
}

// Morris Traversal Solution (O(1) Space)
public void flattenMorris(TreeNode root) {
    TreeNode curr = root;
    
    while (curr != null) {
        if (curr.left != null) {
            TreeNode prev = curr.left;
            while (prev.right != null) {
                prev = prev.right;
            }
            prev.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
}</code></pre>`,
                `<strong>12. Populating Next Right Pointers in Each Node (LeetCode 116/117):</strong><pre><code>// Definition for Node:
// class Node { int val; Node left; Node right; Node next; }

// Queue-based BFS (O(W) Space)
public Node connect(Node root) {
    if (root == null) return null;
    
    Queue&lt;Node&gt; queue = new LinkedList&lt;&gt;();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i &lt; levelSize; i++) {
            Node node = queue.poll();
            if (i &lt; levelSize - 1) {
                node.next = queue.peek();
            }
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    
    return root;
}

// O(1) Constant Space Solution
public Node connectConstantSpace(Node root) {
    if (root == null) return null;
    
    Node leftmost = root;
    
    while (leftmost.left != null) {
        Node head = leftmost;
        
        while (head != null) {
            head.left.next = head.right;
            
            if (head.next != null) {
                head.right.next = head.next.left;
            }
            
            head = head.next;
        }
        
        leftmost = leftmost.left;
    }
    
    return root;
}</code></pre>`
            ]
        },
        {
            heading: "5. Complexities & Tradeoffs",
            items: [
                `<strong>Time Complexity Summary:</strong><br><table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px;">Operation</th><th style="padding: 8px;">Binary Tree</th><th style="padding: 8px;">Balanced BST</th><th style="padding: 8px;">Skewed BST</th></tr></thead><tbody><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Search</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px; color: #10b981;">O(log N)</td><td style="padding: 8px; color: #ef4444;">O(N)</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Insert</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px; color: #10b981;">O(log N)</td><td style="padding: 8px; color: #ef4444;">O(N)</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Delete</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px; color: #10b981;">O(log N)</td><td style="padding: 8px; color: #ef4444;">O(N)</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Traversal</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(N)</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Height</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px; color: #10b981;">O(log N)</td><td style="padding: 8px; color: #ef4444;">O(N)</td></tr></tbody></table>`,
                `<strong>Space Complexity Summary:</strong><br><table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px;">Algorithm</th><th style="padding: 8px;">Space Complexity</th><th style="padding: 8px;">Notes</th></tr></thead><tbody><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">DFS Recursive</td><td style="padding: 8px;">O(H)</td><td style="padding: 8px;">H = height of tree (call stack space)</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">DFS Iterative</td><td style="padding: 8px;">O(H)</td><td style="padding: 8px;">Stack size boundaries</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">BFS Queue</td><td style="padding: 8px;">O(W)</td><td style="padding: 8px;">W = max width of tree level</td></tr><tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Morris Traversal</td><td style="padding: 8px; color: #10b981;">O(1)</td><td style="padding: 8px;">Constant space via temporary threads</td></tr></tbody></table>`,
                `<strong>Recursion vs. Iteration:</strong><ul><li><strong>Recursive DFS:</strong> Clean and simple to write, but risks stack overflow on skewed trees. Space is O(H) (worst-case O(N)).</li><li><strong>Iterative DFS:</strong> More complex, but safe as it uses heap-allocated stack structure. Space is O(H) (worst-case O(N)).</li><li><strong>Morris Traversal:</strong> Most space-efficient traversal (O(1) auxiliary space) using pointer threads. Time is O(N) but contains additional operations to build and destroy threads.</li></ul>`
            ]
        },
        {
            heading: "6. Problem-Solving Patterns",
            items: [
                `<strong>Pattern 1: DFS Template:</strong> Recursively traverse the tree, performing work in pre-order, in-order, or post-order.<pre><code>public void dfs(TreeNode node, List&lt;Integer&gt; result) {
    if (node == null) return;
    
    // Pre-order (process before children)
    result.add(node.val);
    
    dfs(node.left, result);
    dfs(node.right, result);
    
    // Post-order (process after children)
}</code></pre>`,
                `<strong>Pattern 2: BFS Template:</strong> Level-order processing using a Queue.<pre><code>public void bfs(TreeNode root) {
    if (root == null) return;
    
    Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i &lt; levelSize; i++) {
            TreeNode node = queue.poll();
            // Process node here
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
}</code></pre>`,
                `<strong>Pattern 3: Divide and Conquer:</strong> Divide the problem into subproblems (left and right subtrees) and merge results.<pre><code>public TreeNode divideAndConquer(TreeNode root) {
    if (root == null) return null;
    
    // Divide
    TreeNode leftResult = divideAndConquer(root.left);
    TreeNode rightResult = divideAndConquer(root.right);
    
    // Conquer - combine results
    TreeNode combined = combine(root, leftResult, rightResult);
    return combined;
}</code></pre>`,
                `<strong>Pattern 4: Backtracking on Tree:</strong> Choose a node, explore paths, and unchoose (backtrack) before returning.<pre><code>public void backtrack(TreeNode node, List&lt;Integer&gt; path, List&lt;List&lt;Integer&gt;&gt; result) {
    if (node == null) return;
    
    // Choose
    path.add(node.val);
    
    // Explore
    if (node.left == null && node.right == null) {
        result.add(new ArrayList&lt;&gt;(path)); // Leaf found
    } else {
        backtrack(node.left, path, result);
        backtrack(node.right, path, result);
    }
    
    // Unchoose (backtrack)
    path.remove(path.size() - 1);
}</code></pre>`,
                `<strong>Pattern 5: Two-Pointer on Tree (BST):</strong> Converting BST to inorder list to search/validate values using left and right pointers.<pre><code>public boolean findTarget(TreeNode root, int k) {
    List&lt;Integer&gt; inorder = new ArrayList&lt;&gt;();
    inorderTraversal(root, inorder);
    
    int left = 0, right = inorder.size() - 1;
    while (left &lt; right) {
        int sum = inorder.get(left) + inorder.get(right);
        if (sum == k) return true;
        if (sum &lt; k) left++;
        else right--;
    }
    return false;
}</code></pre>`
            ]
        },
        {
            heading: "7. Common Interview Problems",
            items: [
                `<strong>Easy Problems:</strong><br><table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px; width: 8%;">#</th><th style="padding: 8px; width: 42%;">Problem</th><th style="padding: 8px; width: 25%;">Key Technique</th><th style="padding: 8px; width: 25%;">Solution Pattern</th></tr></thead><tbody>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">1</td><td style="padding: 8px; font-weight: 600;">Maximum Depth of Binary Tree</td><td style="padding: 8px;">DFS / BFS</td><td style="padding: 8px;">Recursive height</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">2</td><td style="padding: 8px; font-weight: 600;">Binary Tree Inorder Traversal</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Recursive/Iterative</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">3</td><td style="padding: 8px; font-weight: 600;">Same Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Compare nodes</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">4</td><td style="padding: 8px; font-weight: 600;">Symmetric Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Mirror check</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">5</td><td style="padding: 8px; font-weight: 600;">Invert Binary Tree</td><td style="padding: 8px;">DFS / BFS</td><td style="padding: 8px;">Swap children</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">6</td><td style="padding: 8px; font-weight: 600;">Path Sum</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Target subtraction</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">7</td><td style="padding: 8px; font-weight: 600;">Balanced Binary Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Height check</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">8</td><td style="padding: 8px; font-weight: 600;">Minimum Depth of Binary Tree</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Level order</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">9</td><td style="padding: 8px; font-weight: 600;">Merge Two Binary Trees</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Add values</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">10</td><td style="padding: 8px; font-weight: 600;">Range Sum of BST</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">BST property</td></tr>
</tbody></table>`,
                `<strong>Medium Problems:</strong><br><table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px; width: 8%;">#</th><th style="padding: 8px; width: 42%;">Problem</th><th style="padding: 8px; width: 25%;">Key Technique</th><th style="padding: 8px; width: 25%;">Solution Pattern</th></tr></thead><tbody>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">11</td><td style="padding: 8px; font-weight: 600;">Binary Tree Level Order Traversal</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Queue with level</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">12</td><td style="padding: 8px; font-weight: 600;">Binary Tree Zigzag Level Order Traversal</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Reverse alternate</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">13</td><td style="padding: 8px; font-weight: 600;">Validate Binary Search Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Range checking</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">14</td><td style="padding: 8px; font-weight: 600;">Lowest Common Ancestor of a Binary Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Return nodes</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">15</td><td style="padding: 8px; font-weight: 600;">Binary Tree Right Side View</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Last node per level</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">16</td><td style="padding: 8px; font-weight: 600;">Kth Smallest Element in a BST</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Inorder count</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">17</td><td style="padding: 8px; font-weight: 600;">Flatten Binary Tree to Linked List</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Morris/Stack</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">18</td><td style="padding: 8px; font-weight: 600;">Construct Binary Tree from Preorder and Inorder</td><td style="padding: 8px;">Divide &amp; Conquer</td><td style="padding: 8px;">Recursive build</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">19</td><td style="padding: 8px; font-weight: 600;">Sum Root to Leaf Numbers</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Path sum</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">20</td><td style="padding: 8px; font-weight: 600;">Populating Next Right Pointers in Each Node</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Level connection</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">21</td><td style="padding: 8px; font-weight: 600;">Path Sum II</td><td style="padding: 8px;">DFS / Backtrack</td><td style="padding: 8px;">Path collection</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">22</td><td style="padding: 8px; font-weight: 600;">Binary Tree Maximum Path Sum</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Node contributions</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">23</td><td style="padding: 8px; font-weight: 600;">Diameter of Binary Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Height aggregation</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">24</td><td style="padding: 8px; font-weight: 600;">Subtree of Another Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Pattern matching</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">25</td><td style="padding: 8px; font-weight: 600;">Cousins in Binary Tree</td><td style="padding: 8px;">BFS</td><td style="padding: 8px;">Parent tracking</td></tr>
</tbody></table>`,
                `<strong>Hard Problems:</strong><br><table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px; width: 8%;">#</th><th style="padding: 8px; width: 42%;">Problem</th><th style="padding: 8px; width: 25%;">Key Technique</th><th style="padding: 8px; width: 25%;">Solution Pattern</th></tr></thead><tbody>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">26</td><td style="padding: 8px; font-weight: 600;">Serialize and Deserialize Binary Tree</td><td style="padding: 8px;">BFS / DFS</td><td style="padding: 8px;">String encoding</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">27</td><td style="padding: 8px; font-weight: 600;">Recover Binary Search Tree</td><td style="padding: 8px;">Inorder</td><td style="padding: 8px;">Find swapped</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">28</td><td style="padding: 8px; font-weight: 600;">Binary Tree Vertical Order Traversal</td><td style="padding: 8px;">BFS + Map</td><td style="padding: 8px;">Column mapping</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">29</td><td style="padding: 8px; font-weight: 600;">Binary Tree Cameras</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">State DP</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">30</td><td style="padding: 8px; font-weight: 600;">Maximum Sum BST in Binary Tree</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Validate + sum</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">31</td><td style="padding: 8px; font-weight: 600;">All Possible Full Binary Trees</td><td style="padding: 8px;">Recursion</td><td style="padding: 8px;">Catalan numbers</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">32</td><td style="padding: 8px; font-weight: 600;">Find Kth Ancestor of a Tree Node</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Parent tracking</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">33</td><td style="padding: 8px; font-weight: 600;">All Nodes Distance K in Binary Tree</td><td style="padding: 8px;">Graph BFS</td><td style="padding: 8px;">Parent mapping</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">34</td><td style="padding: 8px; font-weight: 600;">Smallest Subtree with all the Deepest Nodes</td><td style="padding: 8px;">DFS</td><td style="padding: 8px;">Node counting</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px;">35</td><td style="padding: 8px; font-weight: 600;">Construct Tree from Preorder and Postorder</td><td style="padding: 8px;">Divide &amp; Conquer</td><td style="padding: 8px;">Index tracking</td></tr>
</tbody></table>`
            ]
        },
        {
            heading: "8. Java Implementation Tips & Errors",
            items: [
                `<strong>1. Recursion Best Practices (Base Case First & Memoization):</strong> Always establish base cases first to prevent infinite recursion, and use maps for performance optimization when necessary.<pre><code>// Standard Recursion Structure
public void dfs(TreeNode node) {
    if (node == null) return;  // Base case first
    
    // Process current node
    dfs(node.left);
    dfs(node.right);
}

// Recursion with Memoization State Helper
public int solve(TreeNode root) {
    return helper(root, new HashMap&lt;&gt;());  // Pass memoization map
}
private int helper(TreeNode node, Map&lt;TreeNode, Integer&gt; memo) {
    if (node == null) return 0;
    if (memo.containsKey(node)) return memo.get(node);
    
    // Compute result and store in map
    int result = node.val + helper(node.left, memo) + helper(node.right, memo);
    memo.put(node, result);
    return result;
}</code></pre>`,
                `<strong>2. BFS Level order template:</strong> Ensure <code>levelSize</code> is captured before iterating over children nodes to prevent index corruption.<pre><code>Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;();
queue.offer(root);

while (!queue.isEmpty()) {
    int levelSize = queue.size(); // Freeze size for current level
    for (int i = 0; i &lt; levelSize; i++) {
        TreeNode node = queue.poll();
        // Process node
        
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}</code></pre>`,
                `<strong>3. Morris Inorder Traversal Template (O(1) Space):</strong> Space-efficient traversal by temporarily modifying tree links.<pre><code>public void morrisInorder(TreeNode root) {
    TreeNode curr = root;
    while (curr != null) {
        if (curr.left == null) {
            System.out.print(curr.val + " ");
            curr = curr.right;
        } else {
            // Find predecessor
            TreeNode pred = curr.left;
            while (pred.right != null && pred.right != curr) {
                pred = pred.right;
            }
            
            if (pred.right == null) {
                pred.right = curr;  // Create thread
                curr = curr.left;
            } else {
                pred.right = null;  // Remove thread
                System.out.print(curr.val + " ");
                curr = curr.right;
            }
        }
    }
}</code></pre>`,
                `❌ <strong>Common Mistakes to Avoid:</strong><ul>
<li><strong>Missing Null Check:</strong> Adding values or accessing children without checking if the node is null leads to <code>NullPointerException</code>.
<pre><code>// ❌ WRONG (NPE Risk)
public int sum(TreeNode node) {
    return node.val + sum(node.left) + sum(node.right);
}
// ✅ CORRECT
public int sum(TreeNode node) {
    if (node == null) return 0;
    return node.val + sum(node.left) + sum(node.right);
}</code></pre></li>
<li><strong>Modifying Collection While Iterating:</strong> Adding items directly to the collection you are iterating over throws a <code>ConcurrentModificationException</code>.
<pre><code>// ❌ WRONG
Queue&lt;TreeNode&gt; queue = new LinkedList&lt;&gt;(list);
while (!queue.isEmpty()) {
    list.add(queue.poll()); // Throws ConcurrentModificationException
}
// ✅ CORRECT
List&lt;TreeNode&gt; result = new ArrayList&lt;&gt;();
while (!queue.isEmpty()) {
    result.add(queue.poll());
}</code></pre></li>
<li><strong>Forgetting queue child checks:</strong> Ensure child nodes are non-null before adding to Queue in BFS.</li>
</ul>`
            ]
        },
        {
            heading: "9. Complexity Cheat Sheet",
            items: [
                `<strong>Balanced vs. Skewed Trees:</strong> Height difference significantly changes average case operations.
<pre>Balanced BST (log n height):
              8
           /     \\
          4       12
         / \\     /  \\
        2   6   10  14
Operations (Search, Insert, Delete): O(log N)

Skewed Tree (N height):
    1
     \\
      2
       \\
        3
         \\
          4
Operations (Search, Insert, Delete): O(N)</pre>`,
                `<strong>Quick Complexity Reference Table:</strong><br>
<table class="dsa-table" style="width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;"><thead><tr style="border-bottom: 2px solid var(--glass-border); text-align: left;"><th style="padding: 8px;">Operation / Traversal</th><th style="padding: 8px;">Algorithm / Code Pattern</th><th style="padding: 8px;">Time Complexity</th><th style="padding: 8px;">Space Complexity</th></tr></thead><tbody>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Height Calculation</td><td style="padding: 8px;"><code>1 + Math.max(leftH, rightH)</code></td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(H) (call stack)</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Size Calculation</td><td style="padding: 8px;"><code>1 + size(left) + size(right)</code></td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(H)</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Inorder Traversal</td><td style="padding: 8px;">Left &rarr; Node &rarr; Right</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(H)</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Preorder Traversal</td><td style="padding: 8px;">Node &rarr; Left &rarr; Right</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(H)</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Postorder Traversal</td><td style="padding: 8px;">Left &rarr; Right &rarr; Node</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(H)</td></tr>
<tr style="border-bottom: 1px solid rgba(255,255,255,0.05);"><td style="padding: 8px; font-weight: 600;">Level Order Traversal</td><td style="padding: 8px;">Queue-based BFS</td><td style="padding: 8px;">O(N)</td><td style="padding: 8px;">O(W) (max width)</td></tr>
</tbody></table>`
            ]
        },
        {
            heading: "10. Summary - Must Know for Interviews",
            items: [
                `<strong>Top 10 Tree Algorithms to Master:</strong><ol>
<li>DFS Traversals (Pre/In/Post order)</li>
<li>BFS Level Order Traversal</li>
<li>Height / Depth Calculation</li>
<li>Validate BST Property</li>
<li>Lowest Common Ancestor (LCA)</li>
<li>Path Sum Problems (Root-to-Leaf paths)</li>
<li>Diameter of a Binary Tree</li>
<li>Construct Tree from Traversals (Pre/In)</li>
<li>Serialize / Deserialize a Binary Tree</li>
<li>Flatten Binary Tree to Linked List</li>
</ol>`,
                `<strong>Key Insights & Takeaways:</strong><ul>
<li>An <strong>Inorder traversal of a BST</strong> always yields elements in strictly <strong>sorted order</strong>.</li>
<li><strong>Morris Traversal</strong> allows inorder traversal with <strong>O(1) space</strong> by mapping predecessor right pointers back to current node.</li>
<li>Use <strong>BFS</strong> for level-related problems (e.g., Min Depth, Populating Next, Right Side View).</li>
<li>Use <strong>DFS</strong> for path/ancestor related problems (e.g., LCA, Max Path Sum).</li>
<li>A tree is <strong>balanced</strong> if height difference between left and right subtrees at any node is &le; 1.</li>
</ul>`,
                `<strong>Quick Interview Code Templates:</strong><pre><code>// 1. DFS Traversal Template
void dfs(TreeNode node) {
    if (node == null) return;
    // pre-order work
    dfs(node.left);
    // in-order work
    dfs(node.right);
    // post-order work
}

// 2. BFS Level Order Template
void bfs(TreeNode root) {
    Queue&lt;TreeNode&gt; q = new LinkedList&lt;&gt;();
    q.offer(root);
    while (!q.isEmpty()) {
        int size = q.size();
        for (int i = 0; i &lt; size; i++) {
            TreeNode curr = q.poll();
            if (curr.left != null) q.offer(curr.left);
            if (curr.right != null) q.offer(curr.right);
        }
    }
}

// 3. BST Insert Template
TreeNode insert(TreeNode root, int val) {
    if (root == null) return new TreeNode(val);
    if (val &lt; root.val) root.left = insert(root.left, val);
    else root.right = insert(root.right, val);
    return root;
}

// 4. BST Search Template
TreeNode search(TreeNode root, int val) {
    if (root == null || root.val == val) return root;
    return val &lt; root.val ? search(root.left, val) : search(root.right, val);
}</code></pre>`
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
