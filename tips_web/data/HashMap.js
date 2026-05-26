window.TopicsData = window.TopicsData || {};
window.TopicsData["HashMap"] = {
    title: "Hash Maps & Sets",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Key-value pairs, fast lookup time.",
                "<code>HashMap&lt;K, V&gt;</code>, <code>HashSet&lt;K&gt;</code>."
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "Use <code>HashMap</code> for storing frequencies.<pre><code>map.put(key, map.getOrDefault(key, 0) + 1);</code></pre>",
                "Iterating through a HashMap:<pre><code>for(Map.Entry<Integer, Integer> entry : map.entrySet()) {\n    int key = entry.getKey();\n    int val = entry.getValue();\n}</code></pre>",
                "Use <code>HashSet</code> for distinct elements and lookups.<pre><code>Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3));</code></pre>",
                "When using custom objects as keys in a Map or Set, you MUST override <code>equals()</code> and <code>hashCode()</code>."
            ]
        },
        {
            heading: "Time & Space Complexity",
            items: [
                "<strong>Search/Lookup:</strong> O(1) Average Time, O(N) Worst Case (if many hash collisions).",
                "<strong>Insertion/Deletion:</strong> O(1) Average Time, O(N) Worst Case.",
                "<strong>Space Complexity:</strong> O(N) to store N elements."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
