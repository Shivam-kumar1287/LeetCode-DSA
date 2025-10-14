class q3349 {
    public boolean hasIncreasingSubarrays(List<Integer> nums, int k) {
        int n=nums.size();
        if(k==1){
     return true;
        }
        if(n<2*k)return false;
        boolean[] temp=new  boolean[n];
        int l=0,r=1;
        while(r<n){
            while(r<n && nums.get(r)>nums.get(r-1)){
                if(r-l+1==k){
                     temp[l]=true;
                    l++;
                }
            r++;
            }
            r++;
            l=r-1;
        
        }
        for(int i=k;i<n;i++){
            if(temp[i]&& temp[i-k]){
                return true;
            }
        }
        return false;
    }
}