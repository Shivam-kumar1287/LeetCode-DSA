window.TopicsData = window.TopicsData || {};
window.TopicsData["Greedy"] = {
    title: "Greedy Algorithms",
    sections: [
        {
            heading: "Core Concepts",
            items: [
                "An algorithmic paradigm that makes the locally optimal choice at each step with the hope of finding a globally optimal solution.",
                "Does not look back or reconsider choices once made.",
                "Must exhibit: **Optimal Substructure** and **Greedy Choice Property**."
            ]
        },
        {
            heading: "Common Applications",
            items: [
                "Fractional Knapsack.",
                "Interval Scheduling (sorting intervals by end time).",
                "Huffman Coding.",
                "Dijkstra's / Prim's Algorithm for MST and Shortest Paths."
            ]
        },
        {
            heading: "Complexity & Verification",
            items: [
                "Often requires sorting as a preprocessing step (O(N log N) time).",
                "Once sorted, can usually be processed in a single pass (O(N) time).",
                "Hardest part is proving the mathematical correctness of the greedy choice."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
