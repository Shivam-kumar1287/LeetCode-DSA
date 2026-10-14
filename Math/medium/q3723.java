class q3723 {
    public String maxSumOfSquares(int num, int sum) {
        if(sum>num*9){
            return "";
        }
        int ni=sum/9;
        int re=sum%9;
        StringBuilder res=new StringBuilder();
        for(int i=0;i<ni;i++){
            res.append(9);
        }
        if(re>0){
            res.append(re);
        }
        while(res.length()<num){
            res.append(0);
        }
        return res.toString();
    }
}