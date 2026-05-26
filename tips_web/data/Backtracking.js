window.TopicsData = window.TopicsData || {};
window.TopicsData["Backtracking"] = {
    title: "Recursion & Backtracking",
    sections: [
        {
            heading: "Basics of Recursion",
            items: [
                "A function calling itself directly or indirectly to solve smaller instances of the same problem.",
                "Must have a **Base Case** to prevent infinite execution / StackOverflowError.",
                "Standard structure: <pre><code>public void recurse(parameters) {\n    if (baseCaseCondition) {\n        // handle base case\n        return;\n    }\n    // recursive call\n    recurse(modifiedParameters);\n}</code></pre>"
            ]
        },
        {
            heading: "Backtracking Concept",
            items: [
                "An algorithmic technique that considers searching systematically through all possible configurations.",
                "Tries to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints.",
                "Key steps: **Choose, Explore, Unchoose** (or undo state changes).",
                "Classic Template: <pre><code>public void backtrack(int start, List&lt;Integer&gt; path) {\n    if (goalCondition) {\n        result.add(new ArrayList&lt;&gt;(path));\n        return;\n    }\n    for (int i = start; i &lt; nums.length; i++) {\n        if (isValid(nums[i])) {\n            path.add(nums[i]); // Choose\n            backtrack(i + 1, path); // Explore\n            path.remove(path.size() - 1); // Unchoose (backtrack)\n        }\n    }\n}</code></pre>"
            ]
        },
        {
            heading: "Complexity Analysis",
            items: [
                "<strong>Time Complexity:</strong> Typically exponential (e.g., O(2^N) for subsets, O(N!) for permutations).",
                "<strong>Space Complexity:</strong> O(N) where N is the maximum depth of the recursion tree (system call stack space)."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
