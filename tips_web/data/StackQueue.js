window.TopicsData = window.TopicsData || {};
window.TopicsData["StackQueue"] = {
    title: "Stacks & Queues",
    sections: [
        {
            heading: "Stacks: Definition & Properties",
            items: [
                "<strong>Definition:</strong> A Stack is a linear data structure that follows the <strong>LIFO (Last In, First Out)</strong> principle. Think of a stack of plates: you add to the top and remove from the top.",
                "<strong>Visual Representation:</strong><pre>Push 5:     [5]\nPush 3:     [5, 3]\nPush 8:     [5, 3, 8]\nPop():      [5, 3]      → returns 8\nPeek():     [5, 3]      → returns 3 (view only)</pre>"
            ]
        },
        {
            heading: "Stack: Core Operations & Complexities",
            items: [
                "Common operations and their time and space complexities:<br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">Description</th><th style=\"padding: 8px;\">Time Complexity</th><th style=\"padding: 8px;\">Space Complexity</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">push(x)</td><td style=\"padding: 8px;\">Add element to the top</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">pop()</td><td style=\"padding: 8px;\">Remove and return the top element</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">peek() / top()</td><td style=\"padding: 8px;\">View top element without removing</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">isEmpty()</td><td style=\"padding: 8px;\">Check if the stack is empty</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">size()</td><td style=\"padding: 8px;\">Get number of elements in the stack</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Stack: Real-World Applications",
            items: [
                "✅ <strong>Function Call Stack:</strong> Manages recursion and nested function calls.",
                "✅ <strong>Undo/Redo Operations:</strong> Tracks state changes in text editors, Photoshop, etc.",
                "✅ <strong>Browser History:</strong> Tracks visited URLs for back/forward navigation.",
                "✅ <strong>Expression Evaluation:</strong> Converts infix expressions to postfix and evaluates them.",
                "✅ <strong>Syntax Parsing:</strong> Validates balanced parentheses and brackets.",
                "✅ <strong>Backtracking Algorithms:</strong> Pathfinding, maze solving, and N-Queens.",
                "✅ <strong>Depth-First Search (DFS):</strong> Graph and tree traversals."
            ]
        },
        {
            heading: "Stack: Java Use Cases & Templates",
            items: [
                "<strong>1. Balanced Parentheses:</strong><pre><code>public boolean isValid(String s) {\n    Deque&lt;Character&gt; stack = new ArrayDeque&lt;&gt;();\n    for (char c : s.toCharArray()) {\n        if (c == '(' || c == '[' || c == '{') {\n            stack.push(c);\n        } else {\n            if (stack.isEmpty()) return false;\n            char top = stack.pop();\n            if ((c == ')' && top != '(') ||\n                (c == ']' && top != '[') ||\n                (c == '}' && top != '{')) {\n                return false;\n            }\n        }\n    }\n    return stack.isEmpty();\n}</code></pre>",
                "<strong>2. Next Greater Element (Monotonic Stack):</strong><pre><code>public int[] nextGreaterElement(int[] nums) {\n    Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();\n    int[] result = new int[nums.length];\n    Arrays.fill(result, -1);\n    for (int i = 0; i &lt; nums.length; i++) {\n        while (!stack.isEmpty() && nums[stack.peek()] &lt; nums[i]) {\n            int idx = stack.pop();\n            result[idx] = nums[i];\n        }\n        stack.push(i);\n    }\n    return result;\n}</code></pre>",
                "<strong>3. Min Stack (O(1) getMin):</strong><pre><code>class MinStack {\n    private Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();\n    private Deque&lt;Integer&gt; minStack = new ArrayDeque&lt;&gt;();\n    \n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val &lt;= minStack.peek()) {\n            minStack.push(val);\n        }\n    }\n    \n    public void pop() {\n        if (stack.pop().equals(minStack.peek())) {\n            minStack.pop();\n        }\n    }\n    \n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}</code></pre>",
                "<strong>4. Evaluate Reverse Polish Notation (RPN):</strong><pre><code>public int evalRPN(String[] tokens) {\n    Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();\n    for (String token : tokens) {\n        if (!\"+-*/\".contains(token)) {\n            stack.push(Integer.parseInt(token));\n        } else {\n            int b = stack.pop();\n            int a = stack.pop();\n            switch (token) {\n                case \"+\": stack.push(a + b); break;\n                case \"-\": stack.push(a - b); break;\n                case \"*\": stack.push(a * b); break;\n                case \"/\": stack.push(a / b); break;\n            }\n        }\n    }\n    return stack.pop();\n}</code></pre>"
            ]
        },
        {
            heading: "Queues: Definition & Properties",
            items: [
                "<strong>Definition:</strong> A Queue is a linear data structure that follows the <strong>FIFO (First In, First Out)</strong> principle. Think of a line at a ticket counter: first come, first served.",
                "<strong>Visual Representation:</strong><pre>Enqueue 5:  [5]\nEnqueue 3:  [5, 3]\nEnqueue 8:  [5, 3, 8]\nDequeue():  [3, 8]      → returns 5\nFront():    [3, 8]      → returns 3 (view only)</pre>"
            ]
        },
        {
            heading: "Queue: Core Operations & Complexities",
            items: [
                "Common operations and their time and space complexities:<br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">Description</th><th style=\"padding: 8px;\">Time Complexity</th><th style=\"padding: 8px;\">Space Complexity</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">enqueue(x) / offer(x)</td><td style=\"padding: 8px;\">Add element to the rear</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">dequeue() / poll()</td><td style=\"padding: 8px;\">Remove and return front element</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">front() / peek()</td><td style=\"padding: 8px;\">View front element without removing</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">isEmpty()</td><td style=\"padding: 8px;\">Check if the queue is empty</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">size()</td><td style=\"padding: 8px;\">Get number of elements in the queue</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Queue: Real-World Applications",
            items: [
                "✅ <strong>CPU Scheduling:</strong> Processes waiting for execution in OS queues.",
                "✅ <strong>Print Spooling:</strong> Printer requests lined up in order.",
                "✅ <strong>Message Queues:</strong> Distributed logging/messaging pipelines (Kafka, RabbitMQ).",
                "✅ <strong>Breadth-First Search (BFS):</strong> Graph/tree level order traversals.",
                "✅ <strong>Buffer Management:</strong> I/O stream buffering.",
                "✅ <strong>API Rate Limiting:</strong> Requests queued up or throttled dynamically."
            ]
        },
        {
            heading: "Queue: Java Use Cases & Templates",
            items: [
                "<strong>1. Implement Queue using Two Stacks:</strong><pre><code>class MyQueue {\n    private Deque&lt;Integer&gt; stack1 = new ArrayDeque&lt;&gt;();\n    private Deque&lt;Integer&gt; stack2 = new ArrayDeque&lt;&gt;();\n    \n    public void enqueue(int x) { stack1.push(x); }\n    \n    public int dequeue() {\n        shiftStacks();\n        return stack2.pop();\n    }\n    \n    public int peek() {\n        shiftStacks();\n        return stack2.peek();\n    }\n    \n    public boolean empty() {\n        return stack1.isEmpty() && stack2.isEmpty();\n    }\n    \n    private void shiftStacks() {\n        if (stack2.isEmpty()) {\n            while (!stack1.isEmpty()) {\n                stack2.push(stack1.pop());\n            }\n        }\n    }\n}</code></pre>",
                "<strong>2. Sliding Window Maximum (Deque Trick):</strong><pre><code>public int[] maxSlidingWindow(int[] nums, int k) {\n    if (nums == null || nums.length == 0) return new int[0];\n    int n = nums.length;\n    int[] result = new int[n - k + 1];\n    Deque&lt;Integer&gt; dq = new ArrayDeque&lt;&gt;();\n    int ri = 0;\n    for (int i = 0; i &lt; n; i++) {\n        while (!dq.isEmpty() && dq.peekFirst() &lt;= i - k) {\n            dq.pollFirst();\n        }\n        while (!dq.isEmpty() && nums[dq.peekLast()] &lt;= nums[i]) {\n            dq.pollLast();\n        }\n        dq.offerLast(i);\n        if (i &gt;= k - 1) {\n            result[ri++] = nums[dq.peekFirst()];\n        }\n    }\n    return result;\n}</code></pre>",
                "<strong>3. Recent Counter (Rate Limiter):</strong><pre><code>class RecentCounter {\n    private Deque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();\n    public int ping(int t) {\n        q.offerLast(t);\n        while (q.peekFirst() &lt; t - 3000) {\n            q.pollFirst();\n        }\n        return q.size();\n    }\n}</code></pre>",
                "<strong>4. Circular Queue Implementation:</strong><pre><code>class MyCircularQueue {\n    private int[] queue;\n    private int front = 0, rear = -1, size = 0, capacity;\n    \n    public MyCircularQueue(int k) {\n        queue = new int[k];\n        capacity = k;\n    }\n    \n    public boolean enQueue(int value) {\n        if (isFull()) return false;\n        rear = (rear + 1) % capacity;\n        queue[rear] = value;\n        size++;\n        return true;\n    }\n    \n    public boolean deQueue() {\n        if (isEmpty()) return false;\n        front = (front + 1) % capacity;\n        size--;\n        return true;\n    }\n    \n    public int Front() { return isEmpty() ? -1 : queue[front]; }\n    public int Rear() { return isEmpty() ? -1 : queue[rear]; }\n    public boolean isEmpty() { return size == 0; }\n    public boolean isFull() { return size == capacity; }\n}</code></pre>"
            ]
        },
        {
            heading: "Stack vs. Queue Comparison",
            items: [
                "<table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Feature</th><th style=\"padding: 8px;\">Stack</th><th style=\"padding: 8px;\">Queue</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Principle</td><td style=\"padding: 8px;\">LIFO (Last In First Out)</td><td style=\"padding: 8px;\">FIFO (First In First Out)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Insertion</td><td style=\"padding: 8px;\">push() - at top</td><td style=\"padding: 8px;\">enqueue() / offer() - at rear</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Deletion</td><td style=\"padding: 8px;\">pop() - from top</td><td style=\"padding: 8px;\">dequeue() / poll() - from front</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Access</td><td style=\"padding: 8px;\">Only the top element</td><td style=\"padding: 8px;\">Both front and rear elements</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Use Cases</td><td style=\"padding: 8px;\">DFS, backtracking, parsing expressions</td><td style=\"padding: 8px;\">BFS, task scheduling, buffering data</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Variants</td><td style=\"padding: 8px;\">Min Stack, Monotonic Stack</td><td style=\"padding: 8px;\">Priority Queue, Deque, Circular Queue</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Java & Python Implementations",
            items: [
                "<strong>Stack Implementations:</strong><ul><li><em>Java (Recommended):</em> <code>Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();</code> (much faster and unsynchronized compared to standard legacy <code>Stack</code> class).</li><li><em>Python (Recommended):</em> <code>stack = []</code> (using list <code>append()</code> and <code>pop()</code>) or <code>collections.deque</code>.</li></ul>",
                "<strong>Queue Implementations:</strong><ul><li><em>Java (Recommended):</em> <code>Queue&lt;Integer&gt; q = new ArrayDeque&lt;&gt;();</code> or <code>new LinkedList&lt;&gt;();</code>.</li><li><em>Python (Recommended):</em> <code>from collections import deque; queue = deque()</code> (using <code>append()</code> and <code>popleft()</code>).</li></ul>",
                "<strong>Double-Ended Queue (Deque):</strong> Supports insertion and removal at both ends. In Java, use `ArrayDeque` or `LinkedList`. In Python, use `collections.deque`."
            ]
        },
        {
            heading: "Common Errors & Expert Tricks",
            items: [
                "❌ <strong>Common Mistake:</strong> Forgetting to call <code>isEmpty()</code> checks before executing <code>pop()</code> or <code>peek()</code> (leads to <code>EmptyStackException</code> or <code>NoSuchElementException</code>).",
                "❌ <strong>Common Mistake:</strong> Using Python lists or Java ArrayLists as standard queues. Performing index 0 deletions (e.g. <code>list.pop(0)</code>) takes <strong>O(N) time</strong> because elements must be shifted. Always use double-ended queues (<code>deque</code> / <code>ArrayDeque</code>) for O(1) removals.",
                "💡 <strong>Sentinel Values:</strong> Push a boundary value (like <code>Integer.MAX_VALUE</code> or index <code>-1</code>) to simplify boundary/empty check logic in monotonic structures.",
                "💡 <strong>Thread-Safety:</strong> In concurrent environments, use <code>LinkedBlockingQueue</code> or <code>ConcurrentLinkedQueue</code> in Java, and <code>queue.Queue</code> in Python instead of standard non-synchronized collections."
            ]
        },
        {
            heading: "Common LeetCode Stack & Queue Patterns",
            items: [
                "<strong>Stack Problems:</strong><br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Problem</th><th style=\"padding: 8px;\">Difficulty</th><th style=\"padding: 8px;\">Pattern Type</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Valid Parentheses (LeetCode 20)</td><td style=\"padding: 8px; color: #10b981;\">Easy</td><td style=\"padding: 8px;\">Matching brackets</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Min Stack (LeetCode 155)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Secondary supporting structures</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Evaluate Reverse Polish Notation (LeetCode 150)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Math expressions parsing</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Daily Temperatures (LeetCode 739)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Monotonic Decreasing Stack</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Largest Rectangle in Histogram (LeetCode 84)</td><td style=\"padding: 8px; color: #ef4444;\">Hard</td><td style=\"padding: 8px;\">Monotonic stack boundaries</td></tr></tbody></table>",
                "<strong>Queue & Deque Problems:</strong><br><table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Problem</th><th style=\"padding: 8px;\">Difficulty</th><th style=\"padding: 8px;\">Pattern Type</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Implement Queue using Stacks (LeetCode 232)</td><td style=\"padding: 8px; color: #10b981;\">Easy</td><td style=\"padding: 8px;\">Double stack reversal</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Rotting Oranges (LeetCode 994)</td><td style=\"padding: 8px; color: #f59e0b;\">Medium</td><td style=\"padding: 8px;\">Multi-source BFS traversal</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px;\">Sliding Window Maximum (LeetCode 239)</td><td style=\"padding: 8px; color: #ef4444;\">Hard</td><td style=\"padding: 8px;\">Monotonic double-ended queue</td></tr></tbody></table>"
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
