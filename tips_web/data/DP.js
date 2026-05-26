window.TopicsData = window.TopicsData || {};
window.TopicsData["DP"] = {
    title: "Dynamic Programming (1D, 2D, Trees)",
    sections: [
        {
            heading: "Basics",
            items: [
                "Overlapping subproblems & optimal substructure."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Always start by identifying the <strong>State</strong> and the <strong>Transitions</strong>.",
                "<strong>Top-Down (Memoization) Code Pattern:</strong><pre><code>Integer[][] memo = new Integer[n][m];\npublic int dp(int i, int j) {\n    if (base_case) return 0;\n    if (memo[i][j] != null) return memo[i][j];\n    return memo[i][j] = result;\n}</code></pre>",
                "<strong>Bottom-Up (Tabulation):</strong> avoids recursion stack overflow.<br><code>int[] dp = new int[n + 1]; dp[0] = base_case;</code>",
                "<strong>Space Optimization:</strong> If <code>dp[i]</code> only depends on <code>dp[i-1]</code> and <code>dp[i-2]</code>, use two variables instead of an array."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>General Time Complexity:</strong> O(Number of States) * O(Time taken to compute each state).",
                "<strong>Top-Down Space Complexity:</strong> O(Number of States) + O(Depth of Recursion).",
                "<strong>Bottom-Up Space Complexity:</strong> O(Number of States) for the DP table.",
                "<strong>Optimized Bottom-Up Space:</strong> Often reducible (e.g., O(N) to O(1) for Fibonacci)."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
