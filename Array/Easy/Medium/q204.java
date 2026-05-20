class q204 {
    public int countPrimes(int n) {
        int c = 0;
        if(n<=2)return 0;
        boolean[] prime=new boolean[n];
        Arrays.fill(prime,true);
        if(n<=2)return 0;
        prime[0]=false;
        prime[1]=false;
        for (int i=2;i*i<n;i++){
            if(prime[i]){
                for(int j=i*i;j<n;j+=i){
                    prime[j]=false;
                }
            }
        }
       
       for(int i=2;i<n;i++){
        if(prime[i]){
            c++;
        }
       }
       return c;
    }
   
}