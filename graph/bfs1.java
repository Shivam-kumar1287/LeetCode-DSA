import java.util.*;

public class bfs1 {

    static class Edge {
        int src;
        int desc;

        Edge(int src, int desc) {
            this.src = src;
            this.desc = desc;
        }
    }

    public static void bfs(ArrayList<Edge>[] graph) {

        Queue<Integer> q = new LinkedList<>();
        boolean[] vis = new boolean[graph.length];

        vis[0] = true;
        q.add(0);

        while (!q.isEmpty()) {
            int cur = q.poll();
            System.out.print(cur + " ");

            for (Edge e : graph[cur]) {
                if (!vis[e.desc]) {
                    vis[e.desc] = true;
                    q.add(e.desc);
                }
            }
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int v = sc.nextInt();
        int e = sc.nextInt();

        ArrayList<Edge>[] graph = new ArrayList[v];

        for (int i = 0; i < v; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int i = 0; i < e; i++) {
            int src = sc.nextInt();
            int desc = sc.nextInt();

            graph[src].add(new Edge(src, desc));
            graph[desc].add(new Edge(desc, src));
        }

        bfs(graph);
    }
}