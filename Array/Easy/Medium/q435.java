class q435 {
    public int eraseOverlapIntervals(int[][] intervals) {
        if(intervals==null || intervals.length==0){
            return 0;
        }
        Arrays.sort(intervals,(a,b)-> Integer.compare(a[0],b[0]));
        int preend=intervals[0][1];
        int c=0;
        for(int i=1;i<intervals.length;i++){
            if(preend>intervals[i][0]){
                c++;
                preend=Math.min(intervals[i][1],preend);
            }else{
                preend=intervals[i][1];
            }
        }
        return c;
    }
}