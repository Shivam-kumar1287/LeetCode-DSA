import java.util.Scanner;
public class array3d {
 public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the dimensions of the 3D array (x, y, z):");
    int x = sc.nextInt();
    int y = sc.nextInt();
    int z = sc.nextInt();
    int[][][] array3D = new int[x][y][z];
    System.out.println("Enter the elements of the 3D array:");
    for (int i = 0; i < x; i++) {
        for (int j = 0; j < y; j++) {
            for (int k = 0; k < z; k++) {
            System.err.println("Enter element for position (" + i + ", " + j + ", " + k + "):");
                array3D[i][j][k] = sc.nextInt();
            }
        }
    }
    System.out.println("The elements of the 3D array are:");
    for (int i = 0; i < x; i++) {
        for (int j = 0; j < y; j++) {
            for (int k = 0; k < z; k++) {
                System.out.print(array3D[i][j][k] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
 }   
}
