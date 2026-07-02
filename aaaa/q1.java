// 1>.write a program  find  second larget element in array 
import java.util.*;
class q1{

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("input for arr size");
        int n=sc.nextInt();
        
        int[] arr=new int[n];
        int val=0;
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
            if(val<arr[i]){
                val=arr[i];
            }
        }


        int second=Integer.MIN_VALUE;
        for(int i=0;i<n;i++){
            if(arr[i]<val  && arr[i]>=second){
                second=Math.max(second,arr[i]);
            }

        }
        System.out.println("second largest value = "+second);
        
        

    }
}