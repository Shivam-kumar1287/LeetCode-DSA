import java.util.Scanner;
public class array4d {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the dimensions of the 4D array (w, x,y, z):");
        int w = sc.nextInt();
        int x = sc.nextInt();
        int y = sc.nextInt();
        int z = sc.nextInt();
        int[][][][] array4D = new int[w][x][y][z];
        System.out.println("Enter the elements of the 4D array:");
        for (int i = 0; i < w; i++) {
            for (int j = 0; j < x; j++) {
                for (int k = 0; k < y; k++) {
                    for (int l = 0; l < z; l++) {
                        System.err.println("Enter element for position (" + i + ", " + j + ", " + k + ", " + l + "):");
                        array4D[i][j][k][l] = sc.nextInt();
                    }
                }
            }
        }
        System.out.println("The elements of the 4D array are:");
        for (int i = 0; i < w; i++) {
            for (int j = 0; j < x; j++) {
                for (int k = 0; k < y; k++) {
                    for (int l = 0; l < z; l++) {
                        System.out.print(array4D[i][j][k][l] + " ");
                    }
                    System.out.println();
                }
                System.out.println();
            }
            System.out.println();
        }
        
    }
}
