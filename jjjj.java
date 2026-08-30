import java.util.Scanner;

class jjjj {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array and n");
        int n = sc.nextInt();
        System.out.println("Enter the value of k");
        int k = sc.nextInt();

        int[] arr = new int[n];

        for(int i=0;i<n;i++){
            System.out.println("Enter the element of array"+(i+1));
            arr[i]=sc.nextInt();

        }

        for(int i=0;i<n-1;i++){
            int minIndex = i;

            for(int j=i+1;j<n;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex=j;
                }
            }

            int temp = arr[minIndex];
            arr[minIndex]=arr[i];
            arr[i]=temp;
        }


System.out.println("The sorted array is");
        for(int i=0;i<n;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.println();
        System.out.println("The kth smallest element is "+arr[k-1]);

    }
    


    
}


/*

int n for arr
step arr input for arr
int m 
  input
arr input
now we create a new array of size n+m
selection sort the new array

*/