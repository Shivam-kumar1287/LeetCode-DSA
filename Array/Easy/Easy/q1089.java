class q1089 {
    public void duplicateZeros(int[] arr) {
        int n=arr.length;
        int[] res=new int[n];
        int j=0;
        for(int i=0;i<arr.length&& j<n;i++){
            if(arr[i]==0){
                res[j]=0;
                j++;
                if(j<n){
                    res[j]=0;
                    j++;
                }
            }else{
                res[j]=arr[i];
                j++;
            }
        }
        for(int i=0;i<n;i++){
            arr[i]=res[i];
        }
    }
}