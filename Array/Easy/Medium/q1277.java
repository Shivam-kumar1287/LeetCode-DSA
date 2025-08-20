class q1277 {
    public int countSquares(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        int total = 0;
        
        int[][] dp = new int[rows][cols];
        
        for (int j = 0; j < cols; j++) {
            dp[0][j] = matrix[0][j];
            total += dp[0][j];
        }
        
        for (int i = 1; i < rows; i++) {
            dp[i][0] = matrix[i][0];
            total += dp[i][0];
        }
        
        for (int i = 1; i < rows; i++) {
            for (int j = 1; j < cols; j++) {
                if (matrix[i][j] == 1) {
                    dp[i][j] = Math.min(Math.min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1;
                    total += dp[i][j];
                }
            }
        }
        
        return total;
    }
}