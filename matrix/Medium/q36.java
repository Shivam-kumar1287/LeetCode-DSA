import java.util.HashSet;

class q36 {
        public boolean isValidSudoku(char[][] board) {
        int n = 9;

        for (int i = 0; i < n; i++) {
            HashSet<Character> rowSet = new HashSet<>();
            for (int j = 0; j < n; j++) {
                char c = board[i][j];
                if (c != '.') {
                     if (rowSet.contains(c)) return false;
                    rowSet.add(c);
                }
            }
        }

        for (int j = 0; j < n; j++) {
            HashSet<Character> colSet = new HashSet<>();
            for (int i = 0; i < n; i++) {
                char c = board[i][j];
                if (c != '.') {
                    if (colSet.contains(c)) return false;
                    colSet.add(c);
                }
            }
        }

        for (int block = 0; block < n; block++) {
            HashSet<Character> boxSet = new HashSet<>();
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    int row = 3 * (block / 3) + i;
                    int col = 3 * (block % 3) + j;
                    char c = board[row][col];
                    if (c != '.') {
                        if (boxSet.contains(c)) return false;
                        boxSet.add(c);
                    }
                }
            }
        }

        return true;
    }
}