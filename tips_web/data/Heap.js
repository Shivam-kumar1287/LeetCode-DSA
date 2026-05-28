window.TopicsData = window.TopicsData || {};
window.TopicsData["Heap"] = {
    title: "Priority Queue & Heaps",
    sections: [
        {
            heading: "Definition & Characteristics",
            items: [
                "<strong>Definition:</strong> A Priority Queue is an abstract data structure where each element has a priority associated with it. Elements are served based on their priority (highest or lowest first), not based on insertion order (FIFO).",
                "<strong>Key Characteristics:</strong><ul><li><strong>Not FIFO:</strong> Order depends entirely on priority, not insertion time.</li><li><strong>Heap-based:</strong> Usually implemented using a binary heap.</li><li><strong>Structure:</strong> Structured as a Complete Binary Tree.</li><li><strong>Heap Property:</strong> Parent is either &le; children (min-heap) or &ge; children (max-heap).</li></ul>",
                "<strong>Visual representation:</strong><pre>Min-Heap (Smallest on top)                  Max-Heap (Largest on top)\n        1                                           9\n      /   \\                                       /   \\\n     3     5                                     7     8\n    / \\   /                                     / \\   /\n   7   8 9                                     5   3 1\nArray: [1, 3, 5, 7, 8, 9]                   Array: [9, 7, 8, 5, 3, 1]</pre>"
            ]
        },
        {
            heading: "Heap Property & Theory",
            items: [
                "<strong>Complete Binary Tree Property:</strong> All levels are filled except possibly the last, and the last level is filled from left to right. This enables efficient storage in a contiguous array.",
                "<strong>Index Calculations for Array-based Heap (0-indexed):</strong><pre>Parent index:      (i - 1) / 2\nLeft child index:  2 * i + 1\nRight child index: 2 * i + 2</pre>"
            ]
        },
        {
            heading: "Heap Operations Visualized",
            items: [
                "<strong>Insert (Push) - O(log N):</strong><br>Insert 2 into min-heap <code>[3, 5, 7, 8, 9]</code>:<pre>Step 1: Add at end       → [3, 5, 7, 8, 9, 2]\nStep 2: Bubble up (Compare 2 with parent 7 & swap) → [3, 5, 2, 8, 9, 7]\nStep 3: Bubble up (Compare 2 with parent 3 & swap) → [2, 5, 3, 8, 9, 7]\nResult: [2, 5, 3, 8, 9, 7]</pre>",
                "<strong>Extract Min/Max (Poll) - O(log N):</strong><br>Extract min from <code>[1, 3, 5, 7, 8, 9]</code>:<pre>Step 1: Remove root      → [_, 3, 5, 7, 8, 9]\nStep 2: Move last to root → [9, 3, 5, 7, 8]\nStep 3: Bubble down (Swap 9 with smaller child 3)  → [3, 9, 5, 7, 8]\nStep 4: Bubble down (Swap 9 with smaller child 7)  → [3, 7, 5, 9, 8]\nResult: [3, 7, 5, 9, 8]</pre>",
                "<strong>Heapify (Build from array) - O(N):</strong><br>Build heap from <code>[5, 3, 8, 1, 4, 6, 2]</code> by processing from last non-leaf node upwards:<pre>Before Heapify:            After Heapify:\n       5                          1\n     /   \\                      /   \\\n    3     8                    3     2\n   / \\   / \\                  / \\   / \\\n  1   4 6   2                5   4 6   8</pre>"
            ]
        },
        {
            heading: "Operations & Complexities",
            items: [
                "<table class=\"dsa-table\" style=\"width:100%; border-collapse: collapse; margin: 10px 0; font-size: 0.9rem;\"><thead><tr style=\"border-bottom: 2px solid var(--glass-border); text-align: left;\"><th style=\"padding: 8px;\">Operation</th><th style=\"padding: 8px;\">Description</th><th style=\"padding: 8px;\">Time Complexity</th><th style=\"padding: 8px;\">Space Complexity</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">peek()</td><td style=\"padding: 8px;\">View top element</td><td style=\"padding: 8px; color: #10b981;\">O(1)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">offer() / push()</td><td style=\"padding: 8px;\">Insert element</td><td style=\"padding: 8px; color: #10b981;\">O(log N)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">poll() / pop()</td><td style=\"padding: 8px;\">Remove and return top</td><td style=\"padding: 8px; color: #10b981;\">O(log N)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">remove(obj)</td><td style=\"padding: 8px;\">Remove arbitrary element</td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">contains()</td><td style=\"padding: 8px;\">Check if element exists</td><td style=\"padding: 8px; color: #f59e0b;\">O(N)</td><td style=\"padding: 8px;\">O(1)</td></tr><tr style=\"border-bottom: 1px solid rgba(255,255,255,0.05);\"><td style=\"padding: 8px; font-weight: 600;\">heapify()</td><td style=\"padding: 8px;\">Build heap from array</td><td style=\"padding: 8px; color: #10b981;\">O(N)</td><td style=\"padding: 8px;\">O(N) storage</td></tr></tbody></table>"
            ]
        },
        {
            heading: "Java PriorityQueue Implementations",
            items: [
                "<strong>Basic Declarations:</strong><pre><code>// Min-Heap (Default)\nPriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();\n\n// Max-Heap\nPriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;(Collections.reverseOrder());\n\n// Max-Heap with custom lambda comparator\nPriorityQueue&lt;Integer&gt; maxHeap2 = new PriorityQueue&lt;&gt;((a, b) -&gt; b - a);</code></pre>",
                "<strong>PriorityQueue with Custom Objects:</strong><pre><code>// Method 1: Implement Comparable interface\nclass Student implements Comparable&lt;Student&gt; {\n    int id; String name; int gpa;\n    @Override\n    public int compareTo(Student other) {\n        return this.gpa - other.gpa; // Min-heap by GPA\n    }\n}\n\n// Method 2: Custom Lambda Comparator\nPriorityQueue&lt;Student&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; a.gpa - b.gpa);\n\n// Method 3: Multi-criteria tie-breaker comparator\nPriorityQueue&lt;Student&gt; pq = new PriorityQueue&lt;&gt;((a, b) -&gt; {\n    if (a.gpa != b.gpa) return b.gpa - a.gpa; // Higher GPA first (Max-heap)\n    return a.id - b.id; // Lower ID first if GPA equal (Min-heap)\n});</code></pre>",
                "<strong>Core API Cheat Sheet:</strong><pre><code>PriorityQueue&lt;Integer&gt; pq = new PriorityQueue&lt;&gt;();\npq.offer(5); pq.offer(2); pq.offer(8);\nint min = pq.peek();      // 2 (View top - O(1))\nint removed = pq.poll();  // 2 (Remove top - O(log N))\npq.remove(5);             // Remove arbitrary - O(N)\nboolean hasEight = pq.contains(8); // Check existence - O(N)\nInteger[] arr = pq.toArray(new Integer[0]); // Heap array copy</code></pre>"
            ]
        },
        {
            heading: "Other Implementations (Python, C++, JS)",
            items: [
                "<strong>Python Heapq:</strong><pre><code>import heapq\nheap = []\nheapq.heappush(heap, 5)\nheapq.heappush(heap, 2)\nmin_elem = heap[0] # peek O(1)\nval = heapq.heappop(heap) # pop O(log N)\n\narr = [5, 3, 8, 1]\nheapq.heapify(arr) # Heapify in-place O(N)\n\n# Max-heap trick: store negative values\nmax_heap = []\nheapq.heappush(max_heap, -5) # pushing 5</code></pre>",
                "<strong>C++ Priority Queue:</strong><pre><code>#include &lt;queue&gt;\n// Max-heap (Default)\nstd::priority_queue&lt;int&gt; maxHeap;\n// Min-heap\nstd::priority_queue&lt;int, std::vector&lt;int&gt;, std::greater&lt;int&gt;&gt; minHeap;</code></pre>",
                "<strong>JavaScript Custom Class Implementation:</strong><pre><code>class PriorityQueue {\n    constructor(comparator = (a, b) =&gt; a - b) {\n        this.heap = [];\n        this.comparator = comparator;\n    }\n    size() { return this.heap.length; }\n    peek() { return this.heap[0]; }\n    push(val) {\n        this.heap.push(val);\n        this._bubbleUp(this.heap.length - 1);\n    }\n    pop() {\n        if (this.size() === 0) return null;\n        const res = this.heap[0];\n        const last = this.heap.pop();\n        if (this.size() &gt; 0) {\n            this.heap[0] = last;\n            this._bubbleDown(0);\n        }\n        return res;\n    }\n    _bubbleUp(idx) {\n        while (idx &gt; 0) {\n            const parent = Math.floor((idx - 1) / 2);\n            if (this.comparator(this.heap[parent], this.heap[idx]) &lt;= 0) break;\n            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];\n            idx = parent;\n        }\n    }\n    _bubbleDown(idx) {\n        const n = this.size();\n        while (true) {\n            let smallest = idx;\n            const left = 2 * idx + 1, right = 2 * idx + 2;\n            if (left &lt; n && this.comparator(this.heap[left], this.heap[smallest]) &lt; 0) smallest = left;\n            if (right &lt; n && this.comparator(this.heap[right], this.heap[smallest]) &lt; 0) smallest = right;\n            if (smallest === idx) break;\n            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];\n            idx = smallest;\n        }\n    }\n}</code></pre>"
            ]
        },
        {
            heading: "Common Patterns & LeetCode Practice",
            items: [
                "<strong>1. Kth Largest/Smallest Element:</strong><br>- Kth Largest: Keep a min-heap of size K. If heap size exceeds K, poll elements. The root holds the Kth largest element in O(N log K) time.<pre><code>public int findKthLargest(int[] nums, int k) {\n    PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();\n    for (int n : nums) {\n        minHeap.offer(n);\n        if (minHeap.size() &gt; k) minHeap.poll();\n    }\n    return minHeap.peek();\n}</code></pre>",
                "<strong>2. Merge K Sorted Lists (LeetCode 23):</strong><br>- Min-heap of list head nodes. Poll min, link it, and insert its next node to heap.<pre><code>public ListNode mergeKLists(ListNode[] lists) {\n    PriorityQueue&lt;ListNode&gt; heap = new PriorityQueue&lt;&gt;((a, b) -&gt; a.val - b.val);\n    for (ListNode node : lists) {\n        if (node != null) heap.offer(node);\n    }\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (!heap.isEmpty()) {\n        ListNode node = heap.poll();\n        curr.next = node; curr = curr.next;\n        if (node.next != null) heap.offer(node.next);\n    }\n    return dummy.next;\n}</code></pre>",
                "<strong>3. Find Median from Data Stream (LeetCode 295):</strong><br>- Two Heaps Pattern: Keep a max-heap of the left/lower half, and a min-heap of the right/higher half. Keep their sizes balanced (difference &le; 1).<pre><code>class MedianFinder {\n    PriorityQueue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;((a, b) -&gt; b - a); // left\n    PriorityQueue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;(); // right\n    \n    public void addNum(int num) {\n        if (maxHeap.isEmpty() || num &lt;= maxHeap.peek()) maxHeap.offer(num);\n        else minHeap.offer(num);\n        // Balance sizes\n        if (maxHeap.size() &gt; minHeap.size() + 1) minHeap.offer(maxHeap.poll());\n        else if (minHeap.size() &gt; maxHeap.size()) maxHeap.offer(minHeap.poll());\n    }\n    public double findMedian() {\n        if (maxHeap.size() &gt; minHeap.size()) return maxHeap.peek();\n        return (maxHeap.peek() + minHeap.peek()) / 2.0;\n    }\n}</code></pre>",
                "<strong>4. Dijkstra's Shortest Path Algorithm:</strong><pre><code>public int[] dijkstra(int n, List&lt;int[]&gt;[] graph, int start) {\n    int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE); dist[start] = 0;\n    PriorityQueue&lt;int[]&gt; heap = new PriorityQueue&lt;&gt;((a, b) -&gt; a[0] - b[0]);\n    heap.offer(new int[]{0, start});\n    while (!heap.isEmpty()) {\n        int[] curr = heap.poll();\n        int d = curr[0], u = curr[1];\n        if (d &gt; dist[u]) continue;\n        for (int[] edge : graph[u]) {\n            int v = edge[0], w = edge[1];\n            if (dist[u] + w &lt; dist[v]) {\n                dist[v] = dist[u] + w;\n                heap.offer(new int[]{dist[v], v});\n            }\n        }\n    }\n    return dist;\n}</code></pre>"
            ]
        },
        {
            heading: "Interview DOs, DON'Ts & Decision Tree",
            items: [
                "<strong>DOs:</strong><ul><li>Use PriorityQueue for dynamic Top/Bottom K elements.</li><li>Leverage O(N) heapify when initializing from a collection instead of calling insert repeatedly.</li><li>Know how to write multi-key tiebreaker comparators.</li></ul>",
                "<strong>DON'Ts:</strong><ul><li>Don't use PriorityQueue for random indexing search (it's not designed for it).</li><li>Don't call <code>pq.remove(obj)</code> frequently (it is a slow <strong>O(N) operation</strong>).</li><li>Don't modify object keys after inserting them, as it invalidates the heap invariants.</li></ul>",
                "<strong>Decision Tree:</strong><pre>Need frequent min/max access? → Priority Queue\nNeed top K elements?        → Priority Queue\nNeed streaming median?     → Two Heaps\nNeed shortest path?        → Dijkstra + Priority Queue\nNeed FIFO queue?           → Regular Queue (not PriorityQueue)\nNeed LIFO stack?           → Stack (not PriorityQueue)</pre>"
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
