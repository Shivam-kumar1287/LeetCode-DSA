class q1154 {
    public int dayOfYear(String date) {
        int year=Integer.parseInt(date.substring(0,4));
        int day=Integer.parseInt(date.substring(8,10));
        int month=Integer.parseInt(date.substring(5,7));
        int[] mday={31,28,31,30,31,30,31,31,30,31,30,31};
        if(year%400==0 || (year%4==0  && year%100!=0)){
            mday[1]=29;
        }
        int total=day;
        for(int i=0;i<month-1;i++){
            total+=mday[i];
        }


        return total;
    }
}