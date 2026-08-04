class q452 {
    public int findMinArrowShots(int[][] points) {
        Arrays.sort(points,(a,b)-> Integer.compare(a[1],b[1]));
        int res=1;
        int prev=0;
        for(int c=0;c<points.length;c++){
            if(points[c][0]>points[prev][1]){
                res++;
                prev=c;
            }
        }
        return res;
    }
}