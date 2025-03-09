public class q287 {
    public static void main(String[] args) {

        int[] ar={2,3,4,5,2};
         int temp=0;
        for(int i=0;i<ar.length;i++){
            for(int j=i+1;i<ar.length;j++){
                if(ar[i]==ar[j])
                {
                    temp = ar[i];
                    System.out.println(temp);
                    break;
                }
            }
        }


    }
}
