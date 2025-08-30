package leetcode.matrix.Easy;
class q2133 {
    public boolean checkValid(int[][] matrix) {
         int n = matrix.length;   
             int m = matrix[0].length;

        HashSet<Integer> set = new HashSet<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (!set.contains(matrix[i][j])) {
                    set.add(matrix[i][j]);
                } else {
                    return false; 
                }
            }
            set.clear(); 
            for (int j = 0; j < m; j++) {
                if (!set.contains(matrix[j][i])) {
                    set.add(matrix[j][i]);
                } else {
                    return false;           }
            }
            set.clear();        }

        return true;
    }
}
