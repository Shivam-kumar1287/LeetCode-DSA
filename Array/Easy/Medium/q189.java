class q189 {
    public void rotate(int[] nums, int k) {
        int l=nums.length;
         k=k%l;
        if(k==0){return ; }
        rev (nums,0,l-1);
        rev(nums,0,k-1);
        rev(nums,k,l-1);
    }
    public static void rev(int[] a,int s,int e ){
        while(s<e){
            int t=a[s];
            a[s]=a[e];
            a[e]=t;
            s++;
            e--;
            
        }
    }
}