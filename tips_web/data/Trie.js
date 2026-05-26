window.TopicsData = window.TopicsData || {};
window.TopicsData["Trie"] = {
    title: "Tries",
    sections: [
        {
            heading: "Trie Concept",
            items: [
                "A prefix tree used for efficient retrieval of keys in a dataset of strings.",
                "Every node contains a map or array of children nodes, and a boolean flag `isEndOfWord`.",
                "Java structure: <pre><code>class TrieNode {\n    TrieNode[] children = new TrieNode[26];\n    boolean isEndOfWord;\n}</code></pre>"
            ]
        },
        {
            heading: "Operations",
            items: [
                "**Insert:** Traverse the string character by character. If a child node doesn't exist, create it. Mark `isEndOfWord = true` at the last node.",
                "**Search:** Traverse the string. If any character path is missing, return `false`. Otherwise, return the final node's `isEndOfWord`.",
                "**StartsWith (Prefix Search):** Same as search, but returns `true` if the entire string can be traversed, regardless of the `isEndOfWord` flag."
            ]
        },
        {
            heading: "Complexity Analysis",
            items: [
                "<strong>Insert Time:</strong> O(L) where L is the length of the string.",
                "<strong>Search/StartsWith Time:</strong> O(L).",
                "<strong>Space Complexity:</strong> O(A * L * N) in the worst case (where A is alphabet size, L average length, N number of words), but shared prefixes optimize memory."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
