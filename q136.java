// import java.lang.reflect.Array;
import java.util.*;
public class q136 {
    static int single(int[] arr){

           for(int i=0;i<arr.length;i++){
                int count=0;
                  for(int j=0;j<arr.length;j++){
                    if(arr[i]==arr[j]){
                        count++;
                    }
                  }

                  if(count==1){
                    return  arr[i];

                }
           }
           return -1;

    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int num=sc.nextInt();
        int[] arr=new int[num];
        for(int i=0;i<num;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println(single(arr));
       sc.close();

       
    }
}
