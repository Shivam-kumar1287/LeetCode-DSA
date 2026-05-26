window.TopicsData = window.TopicsData || {};
window.TopicsData["Graph"] = {
    title: "Graphs (Undirected, Directed, MST, Shortest Paths)",
    sections: [
        {
            heading: "Basics & Java Specifics",
            items: [
                "Nodes (vertices) and edges.",
                "Representing graphs in Java: <code>List<List<Integer>> adj = new ArrayList<>();</code>"
            ]
        },
        {
            heading: "Theoretical & Coding Tips",
            items: [
                "To avoid infinite loops in cyclic graphs, use a visited set or array.",
                "<strong>BFS on Graph Code Pattern:</strong><pre><code>Queue<Integer> q = new LinkedList<>();\nq.offer(startNode);\nvisited[startNode] = true;\nwhile(!q.isEmpty()) {\n    int node = q.poll();\n    for(int neighbor : adj.get(node)) {\n        if(!visited[neighbor]) {\n            visited[neighbor] = true;\n            q.offer(neighbor);\n        }\n    }\n}</code></pre>",
                "For weighted shortest path, use Dijkstra's Algorithm with a <code>PriorityQueue</code>."
            ]
        },
        {
            heading: "Time & Space Complexity (V = Vertices, E = Edges)",
            items: [
                "<strong>DFS / BFS Traversal Time:</strong> O(V + E) for Adjacency List.",
                "<strong>Space Complexity (Adjacency List):</strong> O(V + E).",
                "<strong>Space Complexity (Visited Array):</strong> O(V).",
                "<strong>Dijkstra's Algorithm Time:</strong> O((V + E) log V)."
            ]
        }
    ],
    mcqs: {
        easy: [],
        medium: [],
        hard: []
    }
};
