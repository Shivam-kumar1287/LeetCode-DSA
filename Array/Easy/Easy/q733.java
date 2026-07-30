package Array.Easy.Easy;

public class q733 {
  
    static int[][] dir = {{0,-1},{0,1},{-1,0},{1,0}};

    public int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int oldColor = image[sr][sc];
        if (oldColor == color) return image;

        dfs(image, sr, sc, oldColor, color);
        return image;
    }

    private void dfs(int[][] image, int r, int c, int oldColor, int newColor) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length
                || image[r][c] != oldColor) {
            return;
        }

        image[r][c] = newColor;

        for (int i = 0; i < 4; i++) {
            dfs(image, r + dir[i][0], c + dir[i][1], oldColor, newColor);
        }
    }
}
}
