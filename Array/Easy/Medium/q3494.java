class q3494 {
    public long minTime(int[] skill, int[] mana) {
        int n=skill.length;
        long[] prefix=new long[n];
        prefix[0]=skill[0];
        for(int i=1;i<n;i++){
            prefix[i]=prefix[i-1]+skill[i];
        }
       long starttime=0;
       int m=mana.length;
        for(int i=1;i<mana.length;i++){
           long maxdiff=Long.MIN_VALUE;
            for(int j=0;j<n;j++){
                long left = (j > 0) ? prefix[j - 1] : 0;
                long cur=(mana[i-1]*prefix[j])-(mana[i]*left);
                if(cur>maxdiff){
                      maxdiff=cur;
                }
            }
            starttime+=maxdiff;
        }
        return starttime +mana[m-1]*prefix[n-1];
        
    }
}