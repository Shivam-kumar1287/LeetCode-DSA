window.TopicsData = window.TopicsData || {};
window.TopicsData["Heap"] = {
    title: "Priority Queue & Heaps",
    sections: [
        {
            heading: "Priority Queue Concept",
            items: [
                "A binary tree-based data structure that satisfies the **Heap Property** (min-heap or max-heap).",
                "Used to retrieve the minimum or maximum element in O(1) time.",
                "In Java, implemented via `PriorityQueue<E>` class."
            ]
        },
        {
            heading: "Java PriorityQueue Declarations",
            items: [
                "**Min-Heap (Default):** `PriorityQueue<Integer> minHeap = new PriorityQueue<>();`",
                "**Max-Heap:** `PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());` or custom comparator: `new PriorityQueue<>((a, b) -> b - a);`"
            ]
        },
        {
            heading: "Complexity Analysis",
            items: [
                "<strong>Peek:</strong> O(1) time.",
                "<strong>Insert (Offer):</strong> O(log N) time (requires heapify-up).",
                "<strong>Remove (Poll):</strong> O(log N) time (requires heapify-down).",
                "<strong>Heapify (building from array):</strong> O(N) time."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
