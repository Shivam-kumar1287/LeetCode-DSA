class qgfg {
    public void moveZeroes(int[] arr) {
        // code here
        int n=arr.length;
        int j=0;
        for(int i=0;i<n;i++){
            if(arr[i]!=0){
                int t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
                j++;
                for(int k:arr){
                    System.out.print(k+" ");
                }
                System.out.println();
                System.out.println("i "+arr[i]+" j "+arr[j-1]+"i j "+i+" "+j);
            }
        }
    }
    public static void main(String[] args) {
        qgfg ob=new qgfg();
                System.out.println("unsorted");
            
        int[] arr={0,1,0,3,12};
        for(int i:arr){
             System.out.print(i+" ");
        }
        System.out.println("\nsorted");
        ob.moveZeroes(arr);
    
        for(int i:arr){
            System.out.print(i+" ");
        }
    }
}