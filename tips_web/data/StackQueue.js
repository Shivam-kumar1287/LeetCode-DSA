window.TopicsData = window.TopicsData || {};
window.TopicsData["StackQueue"] = {
    title: "Stacks & Queues",
    sections: [
        {
            heading: "Stack Basics & Java Specifics",
            items: [
                "LIFO (Last In First Out).",
                "Don't use the legacy <code>Stack</code> class because it is synchronized (slow). Use <code>ArrayDeque</code>.<pre><code>Deque<Integer> stack = new ArrayDeque<>();\nstack.push(x);\nint top = stack.pop();</code></pre>"
            ]
        },
        {
            heading: "Stack Coding Tips",
            items: [
                "Monotonic Stack is used for 'Next Greater Element' problems. <em>Theory:</em> Maintain a stack of elements strictly increasing or decreasing.",
                "<strong>Monotonic Stack Code Pattern:</strong><pre><code>Deque<Integer> stack = new ArrayDeque<>();\nfor(int i = 0; i < nums.length; i++) {\n    while(!stack.isEmpty() && nums[stack.peek()] < nums[i]) {\n        int idx = stack.pop();\n        ans[idx] = nums[i]; \n    }\n    stack.push(i);\n}</code></pre>"
            ]
        },
        {
            heading: "Queue Basics & Java Specifics",
            items: [
                "FIFO (First In First Out).",
                "<code>Queue</code> is an interface. Instantiate with a <code>LinkedList</code> or <code>ArrayDeque</code>.<pre><code>Queue<Integer> q = new LinkedList<>();\nq.offer(val);\nint first = q.poll();</code></pre>"
            ]
        },
        {
            heading: "Queue Coding Tips",
            items: [
                "<code>offer</code> and <code>poll</code> are generally preferred over <code>add</code> and <code>remove</code> because they return <code>false/null</code> instead of throwing exceptions.",
                "Deque (Double Ended Queue) allows insertion/deletion from both sides.<pre><code>Deque<Integer> dq = new ArrayDeque<>();\ndq.offerFirst();\ndq.pollLast();</code></pre>",
                "<strong>Why Deque? (e.g. for Sliding Window Maximum)</strong><br>- Maintains elements in decreasing order<br>- Front always stores maximum element<br>- Efficient insertion/removal from both ends",
                "Often used for topological sort (Kahn's Algorithm)."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Push/Pop/Peek (Stack):</strong> O(1) Time",
                "<strong>Enqueue/Dequeue/Peek (Queue):</strong> O(1) Time",
                "<strong>Sliding Window with Deque:</strong> O(N) Time Complexity",
                "<strong>Space Complexity:</strong> O(N) to hold N elements.",
                "<strong>Common Stack Operations & Time Complexity:</strong><br><table class=\"dsa-table\" style=\"width: 100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">List</th><th style=\"padding: 8px;\">deque</th><th style=\"padding: 8px;\">Description</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Push</td><td style=\"padding: 8px; color: #60a5fa;\">O(1)*</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">Add to top</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Pop</td><td style=\"padding: 8px; color: #60a5fa;\">O(1)*</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">Remove from top</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Peek</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">View top</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Empty Check</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">Check if empty</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">Size</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">Get size</td></tr></tbody></table><small style=\"color: var(--text-secondary);\">* Amortized O(1)</small>"
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
