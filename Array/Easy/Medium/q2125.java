class q2125 {
    public int numberOfBeams(String[] bank) {
        int prev=0;
        int t=0;
        for(String s:bank){
            int cur=0;
            for(char c:s.toCharArray()){
                if(c=='1'){
                    cur+=1;
                }
            }
            if(cur>0){
                t+=prev*cur;
                prev=cur;
            }
       }
   return t;
    }
}