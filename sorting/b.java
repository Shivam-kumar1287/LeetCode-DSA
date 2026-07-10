package sorting;
import java.util.Scanner;
public class b {
    // compare adjancemt element and sorted if thery in worng order
    // tc aver 0(n^2) best case 0(n) sc=0(1) 
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] arr=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        // Bubble sort
       bubbleSort(arr);
    for(int i:arr){
        System.out.print(i+" ");
    
    }
    System.out.println("now for selection sort");
    int m=sc.nextInt();
    int [] arr1=new int[m];
    for(int i=0;i<m;i++){
        arr1[i]=sc.nextInt();

    }
    selectionSort(arr1);
    for(int i:arr1){
        System.out.print(i+" ");
    }

    }
    public static void bubbleSort(int[] arr){
        int n=arr.length;
        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
    }
    public static void selectionSort(int[] arr){
        int n=arr.length;
        for(int i=0;i<n-1;i++){
            int minIndex=i;
            for(int j=i+1;j<n;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex=j;
                }
            }
            // Swap the found minimum element with the first element
            int temp=arr[minIndex];
            arr[minIndex]=arr[i];
            arr[i]=temp;
        }
    }
}
