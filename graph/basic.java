package leetcode.graph;

import java.util.ArrayList;
import java.util.Queue;

/*
 * Basic Graph representation using Adjacency List
 * and implementations of DFS and BFS traversals.
 * Vertices are numbered from 0 to V-1.
 * Undirected and weighted graph.
 *          1
 *     0 ----- 2
 *   | \     |
 * |  \2   |3
 * 5 ----- 4
 *   
 */

public class Basic {

    static class Edge {
        int src;
        int dest;
        int wt;

        Edge(int s, int d, int w) {
            this.src = s;
            this.dest = d;
            this.wt = w;
        }
    }

    public static void main(String[] args) {
        int V = 5;
        ArrayList<Edge>[] graph = new ArrayList[V];
        for (int i = 0; i < V; i++) {
            graph[i] = new ArrayList<>();
        }

        // Add undirected edges
        addEdge(graph, 0, 1, 1);
        addEdge(graph, 0, 2, 1);
        addEdge(graph, 1, 3, 2);
        addEdge(graph, 2, 3, 2);
        addEdge(graph, 1, 4, 3);

        // Print graph
        System.out.println("Graph representation:");
        for (int i = 0; i < V; i++) {
            System.out.print("Vertex " + i + " -> ");
            for (Edge e : graph[i]) {
                System.out.print("(" + e.dest + ", wt:" + e.wt + ") ");
            }
            System.out.println();
        }

        // BFS Traversal
        System.out.println("\nBFS Traversal:");
        bfs(graph);

        // DFS Traversal
        System.out.println("\nDFS Traversal:");
        boolean[] vis = new boolean[V];
        dfs(graph, 0, vis);
        System.out.println();
    }

    // Method to add undirected edge
    static void addEdge(ArrayList<Edge>[] graph, int src, int dest, int wt) {
        graph[src].add(new Edge(src, dest, wt));
        graph[dest].add(new Edge(dest, src, wt)); // reverse edge for undirected graph
    }

    // DFS traversal
    public static void dfs(ArrayList<Edge>[] graph, int curr, boolean[] vis) {
        System.out.print(curr + " ");
        vis[curr] = true;
        for (int i = 0; i < graph[curr].size(); i++) {
            Edge e = graph[curr].get(i);
            if (!vis[e.dest]) {
                dfs(graph, e.dest, vis);
            }
        }
    }

    // BFS traversal
    public static void bfs(ArrayList<Edge>[] graph) {
        Queue<Integer> q = new java.util.LinkedList<>();
        boolean[] visited = new boolean[graph.length];

        q.add(0);
        while (!q.isEmpty()) {
            int curr = q.remove();
            if (!visited[curr]) {
                System.out.print(curr + " ");
                visited[curr] = true;
                for (int i = 0; i < graph[curr].size(); i++) {
                    Edge e = graph[curr].get(i);
                    q.add(e.dest);
                }
            }
        }
        System.out.println();
    }
    
}
