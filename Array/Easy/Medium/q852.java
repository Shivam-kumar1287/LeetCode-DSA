package Array.Easy.Medium;

public class q852 {
     public int peakIndexInMountainArray(int[] arr) {
         int max=arr[0];
        int index=0;
        for(int i=1;i<arr.length;i++){
            if(arr[i]>max){
               index=i;
               max=arr[i];
            }
        }
        return index;
    }
}