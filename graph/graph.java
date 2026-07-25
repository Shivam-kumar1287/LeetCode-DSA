import java.util.*;

public class graph {

    static class Edge {
        int dest;
        int wt;

        Edge(int dest, int wt) {
            this.dest = dest;
            this.wt = wt;
        }
    }

    public static void bfs(List<List<Edge>> graph) {
        Queue<Integer> q = new LinkedList<>();
        boolean[] vis = new boolean[graph.size()];

        vis[0] = true;
        q.add(0);

        while (!q.isEmpty()) {
            int node = q.poll();
            System.out.print(node + " ");

            for (Edge e : graph.get(node)) {
                if (!vis[e.dest]) {
                    vis[e.dest] = true;
                    q.add(e.dest);
                }
            }
        }

        System.out.println();

        for (int i = 0; i < vis.length; i++) {
            if (!vis[i]) {
                System.out.println("Graph is not connected");
                return;
            }
        }

        System.out.println("Graph is connected");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int v = sc.nextInt(); // number of vertices
        int n = sc.nextInt(); // number of edges

        List<List<Edge>> graph = new ArrayList<>();

        for (int i = 0; i < v; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < n; i++) {
            int src = sc.nextInt();
            int dest = sc.nextInt();
            int wt = sc.nextInt();

            graph.get(src).add(new Edge(dest, wt));
            graph.get(dest).add(new Edge(src, wt)); // undirected graph
        }

        System.out.println("Graph:");

        for (int i = 0; i < v; i++) {
            System.out.print(i + " -> ");

            for (Edge e : graph.get(i)) {
                System.out.print("(" + e.dest + "," + e.wt + ") ");
            }

            System.out.println();
        }

        System.out.println("BFS Traversal:");
        bfs(graph);

        sc.close();
    }
}