class q485{
    public static void main(String[] args){
        int[] arr={1,1,0,1,1,1};
        int ans=0;
        int c=0;
        for(int i:arr){
            if(i==1){
                c++;
            }
            if(i==0){
                ans=Math.max(ans,c);
                c=0;
            }
        }
        System.out.println(Math.max(ans,c));
    }
}